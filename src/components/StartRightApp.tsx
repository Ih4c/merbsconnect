import { useState, useEffect } from 'react';
import '../styles/App.css';
import { AuthProvider } from '../contexts/AuthContext';
import Navbar from './Navbar';
import StartRightFooter from './StartRightFooter';
import ScrollToTop from './ui/ScrollToTop';
import StartRightLanding from './pages/StartRightLanding';
import Gallery from './pages/Gallery';
import Articles from './pages/Articles';
import Videos from './pages/Videos';

function StartRightApp() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    // Handle same-page sections with smooth scrolling
    if (['home', 'about', 'volunteer'].includes(section)) {
      setActiveSection('home'); // Keep on landing page
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Handle separate pages
      setActiveSection(section);
    }
  };

  const handleRegisterClick = () => {
    // Trigger registration form opening
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const registerBtn = navbar.querySelector('.register-btn') as HTMLElement;
      if (registerBtn) {
        registerBtn.click();
      }
    }
  };

  // Listen for hash changes to handle direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        handleNavigate(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Handle initial hash on load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <StartRightLanding 
            onRegisterClick={handleRegisterClick}
          />
        );
      case 'gallery':
        return <Gallery />;
      case 'articles':
        return <Articles />;
      case 'videos':
        return <Videos />;
      default:
        return (
          <StartRightLanding 
            onRegisterClick={handleRegisterClick}
          />
        );
    }
  };

  return (
    <AuthProvider>
      <div className="app">
        <Navbar 
          activeSection={activeSection} 
          onNavigate={handleNavigate}
        />
        {renderContent()}
        <StartRightFooter onNavigate={handleNavigate} />
        <ScrollToTop />
      </div>
    </AuthProvider>
  );
}

export default StartRightApp;
