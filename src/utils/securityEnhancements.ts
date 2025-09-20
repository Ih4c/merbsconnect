// Additional security enhancements for production readiness
import { SecureSessionManager } from './securityUtils';

// HTTPS enforcement
export const enforceHTTPS = (): void => {
  if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
    window.location.href = window.location.href.replace('http:', 'https:');
  }
};

// Disable right-click and developer tools in production
export const disableDevTools = (): void => {
  if ((window as any).ENV?.NODE_ENV === 'production') {
    // Disable right-click context menu
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Disable F12, Ctrl+Shift+I, Ctrl+U
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
      }
    });
  }
};

// Detect and prevent automated attacks
export class BotDetection {
  private static suspiciousActivity = 0;
  private static lastActivity = Date.now();
  private static isEnabled = false; // Disabled by default to prevent false positives
  
  static enable(): void {
    this.isEnabled = true;
  }
  
  static disable(): void {
    this.isEnabled = false;
    this.suspiciousActivity = 0;
  }
  
  static trackActivity(): void {
    if (!this.isEnabled) return;
    
    const now = Date.now();
    const timeDiff = now - this.lastActivity;
    
    // More lenient detection - only flag extremely fast interactions (< 50ms)
    if (timeDiff < 50) {
      this.suspiciousActivity++;
      
      // Increased threshold to prevent false positives
      if (this.suspiciousActivity > 50) {
        this.handleSuspiciousActivity();
      }
    } else {
      // Reset counter more aggressively
      this.suspiciousActivity = Math.max(0, this.suspiciousActivity - 2);
    }
    
    this.lastActivity = now;
  }
  
  private static handleSuspiciousActivity(): void {
    console.warn('Suspicious bot activity detected');
    // Just log and clear session, don't reload page
    SecureSessionManager.clearSession();
    // Removed window.location.reload() to prevent unwanted reloads
    
    // Dispatch custom event instead of reloading
    const event = new CustomEvent('bot-detected', {
      detail: { message: 'Suspicious activity detected. Please refresh the page.' }
    });
    window.dispatchEvent(event);
  }
}

// Secure clipboard operations
export const secureClipboard = {
  // Prevent sensitive data from being copied
  preventCopy: (element: HTMLElement): void => {
    element.addEventListener('copy', (e) => {
      e.preventDefault();
      e.clipboardData?.setData('text/plain', 'Copy not allowed');
    });
  },
  
  // Clear clipboard after sensitive operations
  clearClipboard: (): void => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('').catch(() => {});
    }
  }
};

// Memory leak prevention
export const preventMemoryLeaks = (): void => {
  // Clear intervals and timeouts on page unload
  window.addEventListener('beforeunload', () => {
    // Clear any remaining timers
    const highestTimeoutId = setTimeout(() => {}, 0);
    for (let i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    
    const highestIntervalId = setInterval(() => {}, 1000);
    for (let i = 0; i < highestIntervalId; i++) {
      clearInterval(i);
    }
    
    // Clear session data
    SecureSessionManager.clearSession();
  });
};

// Initialize all security enhancements
export const initializeProductionSecurity = (): void => {
  enforceHTTPS();
  disableDevTools();
  preventMemoryLeaks();
  
  // Bot detection is disabled by default to prevent false positives
  // Uncomment the following lines to enable bot detection in production:
  // BotDetection.enable();
  // ['click', 'keydown', 'mousemove'].forEach(event => {
  //   document.addEventListener(event, () => BotDetection.trackActivity(), { passive: true });
  // });
};
