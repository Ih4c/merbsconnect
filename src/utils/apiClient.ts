// Secure API client for backend communication
import { SecureSessionManager, sanitizeError } from './securityUtils';

// API configuration
const API_BASE_URL = (window as any).ENV?.REACT_APP_API_URL || 'http://localhost:3001/api';
const API_TIMEOUT = 10000; // 10 seconds

// Request headers interface
type RequestHeaders = {
  'Content-Type': string;
  'Authorization'?: string;
  'X-Session-ID'?: string;
  'X-Request-ID': string;
} & Record<string, string>;

// API response interface
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Generate unique request ID for tracking
const generateRequestId = (): string => {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Secure HTTP client class
class SecureApiClient {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string = API_BASE_URL, timeout: number = API_TIMEOUT) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  // Get secure headers for requests
  private getSecureHeaders(): RequestHeaders {
    const session = SecureSessionManager.getSession();
    const headers: RequestHeaders = {
      'Content-Type': 'application/json',
      'X-Request-ID': generateRequestId(),
    };

    if (session) {
      headers['Authorization'] = `Bearer ${session.sessionId}`;
      headers['X-Session-ID'] = session.sessionId;
    }

    return headers;
  }

  // Sanitize request data to prevent data leakage
  private sanitizeRequestData(data: any): any {
    if (!data) return data;

    const sanitized = { ...data };
    
    // Remove sensitive fields that should never be sent to backend
    delete sanitized.password;
    delete sanitized.confirmPassword;
    delete sanitized.sessionId;
    delete sanitized.token;
    
    // Sanitize string fields
    Object.keys(sanitized).forEach(key => {
      if (typeof sanitized[key] === 'string') {
        sanitized[key] = sanitized[key].trim();
      }
    });

    return sanitized;
  }

  // Make secure HTTP request
  private async makeRequest<T>(
    method: string,
    endpoint: string,
    data?: any,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const url = `${this.baseURL}${endpoint}`;
      const headers = this.getSecureHeaders();
      
      const config: RequestInit = {
        method,
        headers,
        signal: controller.signal,
        credentials: 'include', // Include cookies for CSRF protection
        ...options,
      };

      if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
        config.body = JSON.stringify(this.sanitizeRequestData(data));
      }

      const response = await fetch(url, config);
      clearTimeout(timeoutId);

      // Check if response is ok
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      
      // Validate response structure
      if (typeof result !== 'object') {
        throw new Error('Invalid response format');
      }

      return result as ApiResponse<T>;

    } catch (error: any) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new Error('Request timeout - please try again');
      }
      
      throw new Error(sanitizeError(error));
    }
  }

  // GET request
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('GET', endpoint);
  }

  // POST request
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('POST', endpoint, data);
  }

  // PUT request
  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('PUT', endpoint, data);
  }

  // PATCH request
  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('PATCH', endpoint, data);
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('DELETE', endpoint);
  }

  // Upload file securely
  async uploadFile<T>(endpoint: string, file: File, additionalData?: any): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout * 3); // Longer timeout for uploads

    try {
      const formData = new FormData();
      formData.append('file', file);
      
      if (additionalData) {
        Object.keys(additionalData).forEach(key => {
          formData.append(key, additionalData[key]);
        });
      }

      const session = SecureSessionManager.getSession();
      const headers: any = {
        'X-Request-ID': generateRequestId(),
      };

      if (session) {
        headers['Authorization'] = `Bearer ${session.sessionId}`;
        headers['X-Session-ID'] = session.sessionId;
      }

      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers,
        body: formData,
        signal: controller.signal,
        credentials: 'include',
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      return result as ApiResponse<T>;

    } catch (error: any) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new Error('Upload timeout - please try again');
      }
      
      throw new Error(sanitizeError(error));
    }
  }
}

// Create singleton instance
export const apiClient = new SecureApiClient();

// Authentication API endpoints
export const authAPI = {
  login: async (email: string, password: string): Promise<ApiResponse<{ user: any; token: string }>> => {
    return apiClient.post('/auth/login', { email, password });
  },

  register: async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
  }): Promise<ApiResponse<{ user: any; token: string }>> => {
    return apiClient.post('/auth/register', userData);
  },

  logout: async (): Promise<ApiResponse> => {
    return apiClient.post('/auth/logout');
  },

  refreshToken: async (): Promise<ApiResponse<{ token: string }>> => {
    return apiClient.post('/auth/refresh');
  },

  verifySession: async (): Promise<ApiResponse<{ user: any }>> => {
    return apiClient.get('/auth/verify');
  },
};

// User API endpoints
export const userAPI = {
  getProfile: async (): Promise<ApiResponse<any>> => {
    return apiClient.get('/user/profile');
  },

  updateProfile: async (userData: any): Promise<ApiResponse<any>> => {
    return apiClient.put('/user/profile', userData);
  },

  changePassword: async (currentPassword: string, newPassword: string): Promise<ApiResponse> => {
    return apiClient.post('/user/change-password', { currentPassword, newPassword });
  },

  deleteAccount: async (): Promise<ApiResponse> => {
    return apiClient.delete('/user/account');
  },
};

// Conference API endpoints
export const conferenceAPI = {
  getConferences: async (): Promise<ApiResponse<any[]>> => {
    return apiClient.get('/conferences');
  },

  getConference: async (id: string): Promise<ApiResponse<any>> => {
    return apiClient.get(`/conferences/${id}`);
  },

  registerForConference: async (conferenceId: string, registrationData: any): Promise<ApiResponse> => {
    return apiClient.post(`/conferences/${conferenceId}/register`, registrationData);
  },

  uploadPresentation: async (conferenceId: string, file: File): Promise<ApiResponse> => {
    return apiClient.uploadFile(`/conferences/${conferenceId}/presentations`, file);
  },
};

// Error interceptor for global error handling
export const setupApiInterceptors = () => {
  // Listen for session expiration
  window.addEventListener('session-expired', () => {
    // Clear any pending requests
    console.warn('Session expired - clearing API state');
  });
};

export default apiClient;
