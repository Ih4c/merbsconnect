import React, { createContext, useContext, useState, useEffect } from 'react';
import { SecureSessionManager, RateLimiter, sanitizeError, initializeSecurity } from '../utils/securityUtils';
import { authAPI, setupApiInterceptors } from '../utils/apiClient';
import { initializeProductionSecurity } from '../utils/securityEnhancements';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  registerVolunteer: (volunteerData: any) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
  sessionWarning: boolean;
  extendSession: () => void;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionWarning, setSessionWarning] = useState(false);

  useEffect(() => {
    // Initialize security features
    initializeSecurity();
    setupApiInterceptors();
    initializeProductionSecurity();
    
    // Check for existing secure session on app load
    const session = SecureSessionManager.getSession();
    if (session) {
      setUser(session.user);
      // Verify session with backend
      verifySessionWithBackend();
    } else {
      // Clean up any old localStorage data
      localStorage.removeItem('user');
    }
    setLoading(false);

    // Listen for session events
    const handleSessionWarning = () => {
      setSessionWarning(true);
    };

    const handleSessionExpired = () => {
      setUser(null);
      setSessionWarning(false);
      // Notify backend of session expiration
      authAPI.logout().catch(() => {});
      alert('Your session has expired due to inactivity. Please log in again.');
    };

    window.addEventListener('session-warning', handleSessionWarning);
    window.addEventListener('session-expired', handleSessionExpired);

    return () => {
      window.removeEventListener('session-warning', handleSessionWarning);
      window.removeEventListener('session-expired', handleSessionExpired);
    };
  }, []);

  // Verify session with backend
  const verifySessionWithBackend = async () => {
    try {
      const response = await authAPI.verifySession();
      if (!response.success || !response.data) {
        // Session invalid on backend, clear frontend session
        logout();
      }
    } catch (error) {
      // Network error or session invalid, clear session
      logout();
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Rate limiting for login attempts
    const rateLimitKey = `login_${email}`;
    if (!RateLimiter.isAllowed(rateLimitKey, 5, 15 * 60 * 1000)) {
      setLoading(false);
      throw new Error('Too many login attempts. Please try again in 15 minutes.');
    }
    
    try {
      // Call secure backend API for authentication
      const response = await authAPI.login(email, password);
      
      if (response.success && response.data) {
        const { user } = response.data;
        
        // Store session securely
        SecureSessionManager.storeSession(user);
        setUser(user);
        setSessionWarning(false);
        
        // Reset rate limiting on successful login
        RateLimiter.reset(rateLimitKey);
        
        setLoading(false);
        return true;
      } else {
        throw new Error(response.error || 'Login failed');
      }
    } catch (error) {
      setLoading(false);
      throw new Error(sanitizeError(error));
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setLoading(true);
    
    // Rate limiting for registration attempts
    const rateLimitKey = `register_${userData.email}`;
    if (!RateLimiter.isAllowed(rateLimitKey, 3, 60 * 60 * 1000)) {
      setLoading(false);
      throw new Error('Too many registration attempts. Please try again in 1 hour.');
    }
    
    try {
      // Call secure backend API for registration
      const response = await authAPI.register(userData);
      
      if (response.success && response.data) {
        const { user } = response.data;
        
        // Store session securely
        SecureSessionManager.storeSession(user);
        setUser(user);
        setSessionWarning(false);
        
        setLoading(false);
        return true;
      } else {
        throw new Error(response.error || 'Registration failed');
      }
    } catch (error) {
      setLoading(false);
      throw new Error(sanitizeError(error));
    }
  };

  const logout = async () => {
    try {
      // Notify backend of logout
      await authAPI.logout();
    } catch (error) {
      // Continue with logout even if backend call fails
      console.warn('Backend logout failed:', error);
    }
    
    setUser(null);
    setSessionWarning(false);
    SecureSessionManager.clearSession();
  };

  const registerVolunteer = async (volunteerData: any): Promise<boolean> => {
    setLoading(true);
    
    try {
      // Simulate API call for volunteer registration
      // In production, this would call a backend API
      console.log('Volunteer registration data:', volunteerData);
      
      // Simulate successful registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      throw new Error('Volunteer registration failed. Please try again.');
    }
  };

  const extendSession = () => {
    if (user) {
      SecureSessionManager.updateActivity();
      setSessionWarning(false);
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    registerVolunteer,
    logout,
    loading,
    sessionWarning,
    extendSession
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
