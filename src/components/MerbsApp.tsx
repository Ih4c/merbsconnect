import { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import MerbsNavbar from './MerbsNavbar';
import MerbsHero from './sections/MerbsHero';
import MerbsAbout from './sections/MerbsAbout';
import StartRightSection from './sections/StartRightSection';
import ComingSoonSections from './sections/ComingSoonSections';
import MeetTheTeam from './sections/MeetTheTeam';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import MerbsContact from './sections/MerbsContact';
import Footer from './Footer';
import ScrollToTop from './ui/ScrollToTop';
import SessionWarning from './ui/SessionWarning';
import '../styles/MerbsApp.css';

function MerbsApp() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'startright', 'study-abroad', 'student-companion', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AuthProvider>
      <div className="merbs-app">
        <MerbsNavbar 
          activeSection={activeSection} 
          onNavigate={handleNavigate}
        />
        
        <main className="merbs-main-content">
          <MerbsHero />
          <MerbsAbout />
          <StartRightSection />
          <ComingSoonSections />
          <MeetTheTeam />
          <Testimonials />
          <FAQ />
          <MerbsContact />
        </main>
        
        <Footer />
        <ScrollToTop />
        <SessionWarning />
      </div>
    </AuthProvider>
  );
}

export default MerbsApp;
