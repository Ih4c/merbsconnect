import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [aynDropdownOpen, setAynDropdownOpen] = useState(false);
  const [seriesDropdownOpen, setSeriesDropdownOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const navbar = document.querySelector('.merbs-navbar');
      const navLinks = document.querySelector('.nav-links');

      if (menuOpen && navbar && !navbar.contains(target) && navLinks && !navLinks.contains(target)) {
        setMenuOpen(false);
      }

      // Close dropdowns when clicking outside
      if (!target.closest('.dropdown-container')) {
        setProgramsDropdownOpen(false);
        setAynDropdownOpen(false);
        setSeriesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

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
    setProgramsDropdownOpen(false);
    setAynDropdownOpen(false);

    const element = document.getElementById(section);
    if (element) scrollToWithOffset(element);
  };

  const toggleProgramsDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setProgramsDropdownOpen(!programsDropdownOpen);
    setAynDropdownOpen(false);
    setSeriesDropdownOpen(false);
  };

  const toggleAynDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAynDropdownOpen(!aynDropdownOpen);
    setProgramsDropdownOpen(false);
    setSeriesDropdownOpen(false);
  };

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  // Programs dropdown items
  const programItems = [
    {
      id: 'startright',
      label: 'Start Right Conference',
      description: 'Annual student empowerment conference',
      action: () => navigate('/startright'),
      isActive: true
    },
    {
      id: 'studyabroad',
      label: 'Study Abroad Plus',
      description: 'International education opportunities',
      action: () => { },
      isActive: false
    }
  ];

  // AYN dropdown items
  const aynItems = [
    {
      id: 'merbsstore',
      label: 'MerbsStore',
      description: 'Branded merchandise & books',
      icon: '🛍️',
      action: () => { }
    },
    {
      id: 'merbscreatives',
      label: 'Merbs Creatives',
      description: 'Design & photography services',
      icon: '🎨',
      action: () => { }
    },
    {
      id: 'studentservices',
      label: 'Student Services',
      description: 'Academic help & support',
      icon: '📚',
      action: () => { }
    }
  ];

  // Merbs Series dropdown items
  const seriesItems = [
    {
      id: 'freshman',
      label: 'Freshman (Level 100)',
      description: 'First year courses & resources',
      icon: '🎓',
      color: '#3b82f6'
    },
    {
      id: 'sophomore',
      label: 'Sophomore (Level 200)',
      description: 'Second year materials',
      icon: '📖',
      color: '#eb0c17'
    },
    {
      id: 'junior',
      label: 'Junior (Level 300)',
      description: 'Third year advanced content',
      icon: '🚀',
      color: '#22c55e'
    },
    {
      id: 'senior',
      label: 'Senior (Level 400)',
      description: 'Final year prep & resources',
      icon: '🏆',
      color: '#f97316'
    }
  ];

  const toggleSeriesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSeriesDropdownOpen(!seriesDropdownOpen);
    setProgramsDropdownOpen(false);
    setAynDropdownOpen(false);
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

          {/* Merbs Series Dropdown */}
          <li className="dropdown-container">
            <a
              href="#merbshub"
              onClick={toggleSeriesDropdown}
              className={`dropdown-trigger ${activeSection === "merbshub" ? "active" : ""} ${seriesDropdownOpen ? "open" : ""}`}
            >
              Merbs Series
              <span className="dropdown-arrow">▾</span>
            </a>

            <div className={`dropdown-menu series-dropdown ${seriesDropdownOpen ? "active" : ""}`}>
              <div className="dropdown-header">
                <span className="dropdown-title">Academic Levels</span>
                <a
                  href="#merbshub"
                  className="view-all-link"
                  onClick={(e) => handleNavClick(e, "merbshub")}
                >
                  View All →
                </a>
              </div>
              <div className="dropdown-items">
                {seriesItems.map((item) => (
                  <div
                    key={item.id}
                    className="dropdown-item series-item"
                    onClick={() => {
                      // Scroll to merbshub section
                      const element = document.getElementById('merbshub');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      setMenuOpen(false);
                      setSeriesDropdownOpen(false);
                    }}
                  >
                    <span className="item-icon" style={{ background: `${item.color}20`, color: item.color }}>{item.icon}</span>
                    <div className="item-content">
                      <span className="item-label">{item.label}</span>
                      <span className="item-description">{item.description}</span>
                    </div>
                    <span className="item-arrow">→</span>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {/* Programs Dropdown */}
          <li className="dropdown-container">
            <a
              href="#programs"
              onClick={toggleProgramsDropdown}
              className={`dropdown-trigger ${activeSection === "programs" ? "active" : ""} ${programsDropdownOpen ? "open" : ""}`}
            >
              Programs
              <span className="dropdown-arrow">▾</span>
            </a>

            <div className={`dropdown-menu ${programsDropdownOpen ? "active" : ""}`}>
              <div className="dropdown-header">
                <span className="dropdown-title">Our Programs</span>
                <a
                  href="#programs"
                  className="view-all-link"
                  onClick={(e) => handleNavClick(e, "programs")}
                >
                  View All →
                </a>
              </div>
              <div className="dropdown-items">
                {programItems.map((item) => (
                  <div
                    key={item.id}
                    className={`dropdown-item ${!item.isActive ? 'coming-soon' : ''}`}
                    onClick={() => {
                      if (item.isActive) {
                        item.action();
                        setMenuOpen(false);
                        setProgramsDropdownOpen(false);
                      }
                    }}
                  >
                    <div className="item-content">
                      <span className="item-label">{item.label}</span>
                      <span className="item-description">{item.description}</span>
                    </div>
                    {!item.isActive && <span className="coming-soon-badge">Soon</span>}
                    {item.isActive && <span className="item-arrow">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </li>

          {/* AYN Dropdown */}
          <li className="dropdown-container">
            <a
              href="#allyouneed"
              onClick={toggleAynDropdown}
              className={`dropdown-trigger ${activeSection === "allyouneed" ? "active" : ""} ${aynDropdownOpen ? "open" : ""}`}
            >
              AYN
              <span className="dropdown-arrow">▾</span>
            </a>

            <div className={`dropdown-menu ayn-dropdown ${aynDropdownOpen ? "active" : ""}`}>
              <div className="dropdown-header">
                <span className="dropdown-title">All You Need</span>
                <a
                  href="#allyouneed"
                  className="view-all-link"
                  onClick={(e) => handleNavClick(e, "allyouneed")}
                >
                  View All →
                </a>
              </div>
              <div className="dropdown-items">
                {aynItems.map((item) => (
                  <div
                    key={item.id}
                    className="dropdown-item"
                    onClick={() => {
                      item.action();
                      setMenuOpen(false);
                      setAynDropdownOpen(false);
                    }}
                  >
                    <span className="item-icon">{item.icon}</span>
                    <div className="item-content">
                      <span className="item-label">{item.label}</span>
                      <span className="item-description">{item.description}</span>
                    </div>
                    <span className="item-arrow">→</span>
                  </div>
                ))}
              </div>
            </div>
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
                    background: "#eb0c17",
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
                    setMenuOpen(false);
                  }}
                  className="mobile-cta-btn"
                >
                  Register
                </a>
              )}
            </li>
          )}
        </ul>

        {/* Hamburger */}
        {isMobile && (
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`hamburger ${menuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </nav >

      {/* Auth Modals */}
      {
        showLogin && (
          <LoginForm
            onClose={() => setShowLogin(false)}
            onSwitchToRegister={switchToRegister}
          />
        )
      }
      {
        showRegister && (
          <RegistrationForm
            onClose={() => setShowRegister(false)}
            onSwitchToLogin={switchToLogin}
          />
        )
      }
    </>
  );
}

export default MerbsNavbar;
