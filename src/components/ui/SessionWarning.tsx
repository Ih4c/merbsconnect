import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/SessionWarning.css';

const SessionWarning: React.FC = () => {
  const { sessionWarning, extendSession, logout } = useAuth();
  const [timeLeft, setTimeLeft] = useState(2 * 60); // 2 minutes in seconds

  useEffect(() => {
    if (!sessionWarning) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionWarning]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleExtendSession = () => {
    extendSession();
    setTimeLeft(2 * 60); // Reset timer
  };

  if (!sessionWarning) return null;

  return (
    <div className="session-warning-overlay">
      <div className="session-warning-modal">
        <div className="warning-icon">⚠️</div>
        <h3>Session Expiring Soon</h3>
        <p>Your session will expire in <strong>{formatTime(timeLeft)}</strong> due to inactivity.</p>
        <p>Would you like to extend your session?</p>
        
        <div className="warning-actions">
          <button 
            className="extend-btn"
            onClick={handleExtendSession}
          >
            Extend Session
          </button>
          <button 
            className="logout-btn"
            onClick={logout}
          >
            Logout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionWarning;
