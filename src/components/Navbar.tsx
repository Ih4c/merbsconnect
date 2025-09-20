import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import LoginForm from "./auth/LoginForm";
import RegistrationForm from "./auth/RegistrationForm";
import "../styles/Navbar.css";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      setShowLogin(true);
    }
    setMenuOpen(false);
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
      <nav className="navbar glassy">
        {/* Brand */}
        <div className="brand-container">
          <h1 className="brand-text" onClick={() => handleNavClick('home')}>Start Right</h1>
        </div>

        {/* User info for authenticated users */}
        {isAuthenticated && (
          <div className="user-info">
            <span>Welcome, {user?.firstName}!</span>
          </div>
        )}

        {/* Hamburger menu button */}
        <div 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a 
              href="#home" 
              onClick={() => handleNavClick('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              HOME
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={() => handleNavClick('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              onClick={() => handleNavClick('gallery')}
              className={activeSection === 'gallery' ? 'active' : ''}
            >
              GALLERY
            </a>
          </li>
          <li>
            <a 
              href="#articles" 
              onClick={() => handleNavClick('articles')}
              className={activeSection === 'articles' ? 'active' : ''}
            >
              ARTICLES
            </a>
          </li>
          <li>
            <a 
              href="#videos" 
              onClick={() => handleNavClick('videos')}
              className={activeSection === 'videos' ? 'active' : ''}
            >
              VIDEOS
            </a>
          </li>
          <li>
            <a 
              href="#volunteer" 
              onClick={() => handleNavClick('volunteer')}
              className={activeSection === 'volunteer' ? 'active' : ''}
            >
              VOLUNTEER
            </a>
          </li>
          <li>
            <a 
              href="#register" 
              onClick={handleAuthClick}
              className="register-btn"
            >
              REGISTER
            </a>
          </li>
        </ul>
      </nav>

      {/* Auth Modals */}
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

export default Navbar;
