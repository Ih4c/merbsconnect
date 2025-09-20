import React, { useState } from 'react';
import Hero from '../ui/Hero';
import About from './About';
import PastConferences from './PastConferences';
import VolunteerSection from '../sections/VolunteerSection';
import ConferenceModal from '../ui/ConferenceModal';
import '../../styles/StartRightLanding.css';

interface StartRightLandingProps {
  onRegisterClick: () => void;
}

const StartRightLanding: React.FC<StartRightLandingProps> = ({ onRegisterClick }) => {
  const [selectedConference, setSelectedConference] = useState<any>(null);

  const handleConferenceClick = (conference: any) => {
    setSelectedConference(conference);
  };

  const handleLearnMoreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="startright-landing">
      {/* Hero Section */}
      <section id="home" className="landing-section">
        <Hero 
          onRegisterClick={onRegisterClick}
          onLearnMoreClick={handleLearnMoreClick}
        />
      </section>

      {/* About Section */}
      <section id="about" className="landing-section">
        <About />
      </section>

      {/* Past Conferences Section */}
      <section id="past-conferences" className="landing-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Past Conferences</h2>
            <p className="section-subtitle">
              Explore our journey of empowering students through impactful conferences
            </p>
          </div>
          <PastConferences onConferenceClick={handleConferenceClick} />
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="landing-section">
        <VolunteerSection />
      </section>

      {/* Conference Modal */}
      {selectedConference && (
        <ConferenceModal 
          conference={selectedConference}
          onClose={() => setSelectedConference(null)}
        />
      )}
    </div>
  );
};

export default StartRightLanding;
