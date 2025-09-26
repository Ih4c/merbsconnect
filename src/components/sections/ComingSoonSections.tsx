import React from 'react';
import '../../styles/ComingSoonSections.css';

const ComingSoonSections: React.FC = () => {
  return (
    <>
      {/* Study Abroad Section */}
      <section className="coming-soon-section study-abroad" id="study-abroad">
        <div className="coming-soon-container">
          <div className="coming-soon-content">
            <div className="coming-soon-icon">
              <div className="icon-wrapper">
                ✈️
              </div>
            </div>
            <h2 className="coming-soon-title">Study Abroad Program</h2>
            <p className="coming-soon-description">
              Unlock global educational opportunities with our comprehensive study abroad platform. 
              Connect with top universities worldwide, get guidance on applications, visas, and 
              scholarships to make your international education dreams a reality.
            </p>
            <div className="coming-soon-features">
              <div className="feature-preview">
                <span className="feature-icon">🎓</span>
                <span>University Partnerships</span>
              </div>
              <div className="feature-preview">
                <span className="feature-icon">💰</span>
                <span>Scholarship Guidance</span>
              </div>
              <div className="feature-preview">
                <span className="feature-icon">📋</span>
                <span>Application Support</span>
              </div>
              <div className="feature-preview">
                <span className="feature-icon">🌍</span>
                <span>Global Network</span>
              </div>
            </div>
            <div className="coming-soon-badge">
              <span>Coming Soon</span>
            </div>
            <button className="notify-button" disabled>
              Get Notified When Available
            </button>
          </div>
          <div className="coming-soon-visual">
            <div className="visual-placeholder">
              <img 
                src="/src/assets/studyabroad.jpg" 
                alt="Study Abroad"
              />
              <div className="visual-overlay">
                <div className="overlay-content">
                  <h3>Global Education Awaits</h3>
                  <p>Your journey to international excellence starts here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Companion Section */}
      <section className="coming-soon-section student-companion" id="student-companion">
        <div className="coming-soon-container">
          <div className="coming-soon-visual">
            <div className="visual-placeholder">
              <img 
                src="/src/assets/studentcompanion.jpg" 
                alt="Student Companion"
              />
              <div className="visual-overlay">
                <div className="overlay-content">
                  <h3>Your Academic Success Partner</h3>
                  <p>Comprehensive support for every step of your journey</p>
                </div>
              </div>
            </div>
          </div>
          <div className="coming-soon-content">
            <div className="coming-soon-icon">
              <div className="icon-wrapper">
                🤝
              </div>
            </div>
            <h2 className="coming-soon-title">Student Companion</h2>
            <p className="coming-soon-description">
              Your comprehensive academic and career companion. Get personalized mentorship, 
              academic resources, career guidance, and peer connections to excel in your 
              educational journey and beyond.
            </p>
            <div className="coming-soon-features">
              <div className="feature-preview">
                <span className="feature-icon">👨‍🏫</span>
                <span>Personal Mentorship</span>
              </div>
              <div className="feature-preview">
                <span className="feature-icon">📚</span>
                <span>Academic Resources</span>
              </div>
              <div className="feature-preview">
                <span className="feature-icon">💼</span>
                <span>Career Guidance</span>
              </div>
              <div className="feature-preview">
                <span className="feature-icon">👥</span>
                <span>Peer Network</span>
              </div>
            </div>
            <div className="coming-soon-badge">
              <span>Coming Soon</span>
            </div>
            <button className="notify-button" disabled>
              Get Notified When Available
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoonSections;
