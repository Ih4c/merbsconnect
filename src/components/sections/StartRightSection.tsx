import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/StartRightSection.css';

const StartRightSection: React.FC = () => {
  const navigate = useNavigate();
  const handleExploreConference = () => {
    // This will navigate to the StartRight conference app
    navigate('/startright');
  };

  const conferenceFeatures = [
    {
      icon: '🎯',
      title: 'Industry Leaders',
      description: 'Connect with top professionals and thought leaders in your field'
    },
    {
      icon: '📚',
      title: 'Learning Sessions',
      description: 'Attend workshops, seminars, and interactive learning experiences'
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Build meaningful professional relationships and expand your network'
    },
    {
      icon: '🏆',
      title: 'Career Growth',
      description: 'Gain insights and opportunities for your professional development'
    }
  ];

  const upcomingEvents = [
    {
      title: 'StartRight Conference 2026',
      date: 'June 15-17, 2026',
      location: 'Lagos, Nigeria',
      status: 'Registration Open',
      highlight: true
    },
    {
      title: 'Tech Innovation Summit',
      date: 'September 2026',
      location: 'Abuja, Nigeria',
      status: 'Coming Soon',
      highlight: false
    },
    {
      title: 'Leadership Workshop Series',
      date: 'Monthly',
      location: 'Virtual & Physical',
      status: 'Ongoing',
      highlight: false
    }
  ];

  return (
    <section className="startright-section" id="startright">
      <div className="startright-container">
        <div className="section-header">
          <h2 className="section-title">StartRight Conference</h2>
          <p className="section-subtitle">
            Empowering the next generation of leaders through transformative conference experiences
          </p>
        </div>

        <div className="startright-content">
          {/* Hero Banner */}
          <div className="conference-hero">
            <div className="hero-content">
              <h3 className="hero-title">Join the Premier Professional Development Conference</h3>
              <p className="hero-description">
                StartRight Conference brings together industry leaders, innovators, and ambitious 
                professionals for an unparalleled experience of learning, networking, and growth.
              </p>
              <div className="hero-actions">
                <button className="cta-button primary" onClick={handleExploreConference}>
                  Explore Conference Platform
                </button>
                <button className="cta-button secondary">
                  View 2026 Program
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="StartRight Conference"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="features-section">
            <h3 className="features-title">What Makes StartRight Special</h3>
            <div className="features-grid">
              {conferenceFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="events-section">
            <h3 className="events-title">Upcoming Events</h3>
            <div className="events-grid">
              {upcomingEvents.map((event, index) => (
                <div key={index} className={`event-card ${event.highlight ? 'highlight' : ''}`}>
                  <div className="event-header">
                    <h4 className="event-title">{event.title}</h4>
                    <span className={`event-status ${event.status.toLowerCase().replace(' ', '-')}`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="event-details">
                    <div className="event-detail">
                      <span className="detail-icon">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="event-detail">
                      <span className="detail-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  {event.highlight && (
                    <button className="event-cta" onClick={handleExploreConference}>
                      Register Now
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="final-cta">
            <div className="cta-content">
              <h3>Ready to Start Right?</h3>
              <p>Join thousands of professionals who have transformed their careers through our conferences</p>
              <div className="final-cta-buttons">
                <button className="cta-button large" onClick={handleExploreConference}>
                  Access Full Conference Platform
                </button>
                <button className="cta-button large secondary-cta" onClick={handleExploreConference}>
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartRightSection;
