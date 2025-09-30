import { useState, useEffect } from "react";
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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToWithOffset = (el: HTMLElement) => {
    const navbar = document.querySelector(".merbs-navbar") as HTMLElement | null;
    const headerHeight =
      (navbar?.getBoundingClientRect().height ?? 0) ||
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--navbar-height")) ||
      70;

    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: string
  ) => {
    e.preventDefault();
    onNavigate(section);
    setMenuOpen(false);

    const element = document.getElementById(section);
    if (element) scrollToWithOffset(element);
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
        {/* Brand Logo */}
        <div className="brand-container" onClick={() => onNavigate("home")}>
          <img src={merbsLogo} alt="MERBS Connect" className="brand-logo" />
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isMobile && menuOpen ? "active" : ""}`}>
          {/* Mobile Close Button */}
          {isMobile && (
            <li className="mobile-close">
              
            </li>
          )}

          <li>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#startright"
              onClick={(e) => handleNavClick(e, "startright")}
              className={activeSection === "startright" ? "active" : ""}
            >
              StartRight
            </a>
          </li>
          <li>
            <a
              href="#study-abroad"
              onClick={(e) => handleNavClick(e, "study-abroad")}
              className={`${activeSection === "study-abroad" ? "active" : ""} disabled`}
            >
              Study Abroad
            </a>
          </li>
          <li>
            <a
              href="#student-companion"
              onClick={(e) => handleNavClick(e, "student-companion")}
              className={`${activeSection === "student-companion" ? "active" : ""} disabled`}
            >
              Student Companion
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>

          {/* Desktop CTA */}
          {!isMobile &&
            (isAuthenticated ? (
              <li className="user-info desktop-only">
                Welcome, User!
                <button
                  onClick={logout}
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    background: "#ff6b35",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
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
            ))}

          {/* Mobile CTA */}
          {isMobile && (
            <li className="mobile-cta">
              {isAuthenticated ? (
                <button onClick={logout} className="mobile-cta-btn">
                  Logout
                </button>
              ) : (
                <a
                  href="#register"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowRegister(true);
                  }}
                  className="mobile-cta-btn"
                >
                  Register
                </a>
              )}
            </li>
          )}
        </ul>

        {/* Hamburger only shows on small screens */}
        {isMobile && (
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`hamburger ${menuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Backdrop */}
      {isMobile && (
        <div
          className={`mobile-menu-backdrop ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        />
      )}

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

export default MerbsNavbar;
