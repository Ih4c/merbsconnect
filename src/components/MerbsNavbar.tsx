import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import LoginForm from "./auth/LoginForm";
import RegistrationForm from "./auth/RegistrationForm";
import merbsLogo from "../assets/merbs-logo.png";
import "../styles/MerbsNavbar.css";

interface MerbsNavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

function MerbsNavbar({ activeSection, onNavigate }: MerbsNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <>
      <nav className="merbs-navbar">
        <div className="brand-container" onClick={() => onNavigate('home')}>
          <img 
            src={merbsLogo} 
            alt="MERBS Connect" 
            className="brand-logo"
          />
          
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {/* Mobile Close Button - only visible on mobile */}
          <li className="mobile-close">
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              ×
            </button>
          </li>
          
          <li><a href="#home" onClick={() => handleNavClick('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" onClick={() => handleNavClick('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#startright" onClick={() => handleNavClick('startright')} className={activeSection === 'startright' ? 'active' : ''}>StartRight</a></li>
          <li>
            <a href="#study-abroad" onClick={() => handleNavClick('study-abroad')} className={`${activeSection === 'study-abroad' ? 'active' : ''} disabled`}>
              Study Abroad
            </a>
          </li>
          <li>
            <a href="#student-companion" onClick={() => handleNavClick('student-companion')} className={`${activeSection === 'student-companion' ? 'active' : ''} disabled`}>
              Student Companion
            </a>
          </li>
          <li><a href="#contact" onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          
          {/* Desktop CTA - only visible on desktop */}
          {isAuthenticated ? (
            <li className="user-info desktop-only">
              Welcome, User!
              <button onClick={logout} style={{ marginLeft: '10px', padding: '5px 10px', background: '#ff6b35', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Logout
              </button>
            </li>
          ) : (
            <li className="desktop-only">
              <a 
                href="#register" 
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegister(true);
                }} 
                className="register-btn"
              >
                Register
              </a>
            </li>
          )}
          
          {/* Mobile CTA - only visible on mobile */}
          <li className="mobile-cta">
            {isAuthenticated ? (
              <div className="user-info-mobile">
                <span>Welcome, User!</span>
                <button onClick={logout} className="logout-btn">
                  Logout
                </button>
              </div>
            ) : (
              <a 
                href="#register" 
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegister(true);
                  setMenuOpen(false);
                }} 
                className="mobile-cta-btn"
              >
                Apply Now
              </a>
            )}
          </li>
        </ul>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div className={`mobile-menu-backdrop ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)} />

      {showLogin && (
        <LoginForm 
          onClose={() => setShowLogin(false)} 
          onSwitchToRegister={switchToRegister}
        />
      )}

      {showRegister && (
        <RegistrationForm 
          onClose={() => setShowRegister(false)} 
          onSwitchToLogin={switchToLogin}
        />
      )}
    </>
  );
}

export default MerbsNavbar;
