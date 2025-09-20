// Enhanced security utilities for MERBS application

// User interface (duplicated to avoid import issues)
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

// Session management constants
export const SESSION_TIMEOUT = 10 * 60 * 1000; // 10 minutes in milliseconds
export const INACTIVITY_WARNING_TIME = 8 * 60 * 1000; // 8 minutes - show warning
export const SESSION_REFRESH_INTERVAL = 2 * 60 * 1000; // 2 minutes - check session validity

// Secure token storage interface
interface SecureSession {
  user: User;
  timestamp: number;
  lastActivity: number;
  sessionId: string;
}

// Generate secure session ID
export const generateSessionId = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Secure session storage (more secure than localStorage)
export class SecureSessionManager {
  private static readonly STORAGE_KEY = 'merbs_secure_session';
  private static sessionData: SecureSession | null = null;
  private static inactivityTimer: number | null = null;
  private static warningTimer: number | null = null;

  // Store session securely
  static storeSession(user: User): string {
    const sessionId = generateSessionId();
    const session: SecureSession = {
      user,
      timestamp: Date.now(),
      lastActivity: Date.now(),
      sessionId
    };

    // Store in memory and sessionStorage (more secure than localStorage)
    this.sessionData = session;
    try {
      sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(session));
    } catch (error) {
      console.warn('Session storage failed, using memory only');
    }

    this.startInactivityTimer();
    return sessionId;
  }

  // Retrieve and validate session
  static getSession(): SecureSession | null {
    if (this.sessionData) {
      return this.isSessionValid(this.sessionData) ? this.sessionData : null;
    }

    try {
      const stored = sessionStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const session = JSON.parse(stored) as SecureSession;
        if (this.isSessionValid(session)) {
          this.sessionData = session;
          this.startInactivityTimer();
          return session;
        }
      }
    } catch (error) {
      console.warn('Failed to retrieve session');
    }

    return null;
  }

  // Update last activity timestamp
  static updateActivity(): void {
    if (this.sessionData) {
      this.sessionData.lastActivity = Date.now();
      try {
        sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.sessionData));
      } catch (error) {
        console.warn('Failed to update session activity');
      }
      this.resetInactivityTimer();
    }
  }

  // Check if session is valid
  private static isSessionValid(session: SecureSession): boolean {
    const now = Date.now();
    const sessionAge = now - session.timestamp;
    const inactivityTime = now - session.lastActivity;

    return sessionAge < SESSION_TIMEOUT && inactivityTime < SESSION_TIMEOUT;
  }

  // Start inactivity timer
  private static startInactivityTimer(): void {
    this.clearTimers();

    // Warning timer
    this.warningTimer = setTimeout(() => {
      this.showInactivityWarning();
    }, INACTIVITY_WARNING_TIME);

    // Logout timer
    this.inactivityTimer = setTimeout(() => {
      this.forceLogout();
    }, SESSION_TIMEOUT);
  }

  // Reset inactivity timer
  private static resetInactivityTimer(): void {
    this.startInactivityTimer();
  }

  // Clear all timers
  private static clearTimers(): void {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
      this.inactivityTimer = null;
    }
    if (this.warningTimer) {
      clearTimeout(this.warningTimer);
      this.warningTimer = null;
    }
  }

  // Show inactivity warning
  private static showInactivityWarning(): void {
    const event = new CustomEvent('session-warning', {
      detail: { message: 'Your session will expire in 5 minutes due to inactivity.' }
    });
    window.dispatchEvent(event);
  }

  // Force logout due to inactivity
  private static forceLogout(): void {
    this.clearSession();
    const event = new CustomEvent('session-expired', {
      detail: { message: 'Your session has expired due to inactivity.' }
    });
    window.dispatchEvent(event);
  }

  // Clear session
  static clearSession(): void {
    this.sessionData = null;
    this.clearTimers();
    try {
      sessionStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem('user'); // Clean up old localStorage
    } catch (error) {
      console.warn('Failed to clear session storage');
    }
  }
}

// IDOR prevention - validate user access to resources
export const validateUserAccess = (currentUserId: string, resourceUserId: string): boolean => {
  if (!currentUserId || !resourceUserId) {
    return false;
  }
  return currentUserId === resourceUserId;
};

// Enhanced input sanitization with DOMPurify-like functionality
export const sanitizeHtml = (input: string): string => {
  if (!input) return '';
  
  // Create a temporary div to parse HTML
  const temp = document.createElement('div');
  temp.textContent = input; // This automatically escapes HTML
  return temp.innerHTML;
};

// Rate limiting for API calls
export class RateLimiter {
  private static attempts: Map<string, number[]> = new Map();
  
  static isAllowed(key: string, maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    return true;
  }
  
  static reset(key: string): void {
    this.attempts.delete(key);
  }
}

// Secure error handling - prevent information leakage
export const sanitizeError = (error: any): string => {
  // Never expose internal error details to users
  if (typeof error === 'string') {
    return 'An error occurred. Please try again.';
  }
  
  if (error?.message) {
    // Only return safe, user-friendly messages
    const safeMessages = [
      'Invalid credentials',
      'User not found',
      'Email already exists',
      'Network error',
      'Session expired'
    ];
    
    const message = error.message.toLowerCase();
    const isSafe = safeMessages.some(safe => message.includes(safe.toLowerCase()));
    
    return isSafe ? error.message : 'An error occurred. Please try again.';
  }
  
  return 'An error occurred. Please try again.';
};

// Content Security Policy helpers
export const setupCSP = (): void => {
  // Add CSP meta tag if not present
  if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;";
    document.head.appendChild(meta);
  }
};

// Initialize security features
export const initializeSecurity = (): void => {
  setupCSP();
  
  // Track user activity for session management
  const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
  
  let activityTimeout: number;
  const handleActivity = () => {
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(() => {
      SecureSessionManager.updateActivity();
    }, 1000); // Debounce activity updates
  };
  
  activityEvents.forEach(event => {
    document.addEventListener(event, handleActivity, { passive: true });
  });
};
