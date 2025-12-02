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
import SpeakersProfile from './pages/SpeakersProfile';
import ConferenceRegistrationForm from './forms/ConferenceRegistrationForm';

function StartRightApp() {
  const [activeSection, setActiveSection] = useState('home');
  const [showConferenceForm, setShowConferenceForm] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      window.history.pushState(null, '', `#${section}`);
    } else {
      // Handle separate pages
      setActiveSection(section);
      window.scrollTo(0, 0);
      window.history.pushState(null, '', `#${section}`);
    }
  };

  const handleRegisterClick = () => {
    // Open conference registration form
    setShowConferenceForm(true);
  };

  const handleCloseConferenceForm = () => {
    setShowConferenceForm(false);
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
            onNavigate={handleNavigate}
          />
        );
      case 'gallery':
        return <Gallery />;
      case 'articles':
        return <Articles />;
      case 'videos':
        return <Videos />;
      case 'speakers-profile':
        return <SpeakersProfile />;
      default:
        return (
          <StartRightLanding
            onRegisterClick={handleRegisterClick}
            onNavigate={handleNavigate}
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

        {/* Conference Registration Form Modal */}
        {showConferenceForm && (
          <ConferenceRegistrationForm onClose={handleCloseConferenceForm} />
        )}
      </div>
    </AuthProvider>
  );
}

export default StartRightApp;
