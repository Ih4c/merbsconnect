import React from 'react';
import '../../styles/ConferenceModal.css';

interface Speaker {
  name: string;
  image: string;
  message: string;
  title?: string;
}

interface Conference {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  flyer: string;
  speakers: Speaker[];
  attendees?: number;
  highlights?: string[];
}

interface ConferenceModalProps {
  conference: Conference;
  onClose: () => void;
}

const ConferenceModal: React.FC<ConferenceModalProps> = ({ conference, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="conference-modal-overlay" onClick={handleOverlayClick}>
      <div className="conference-modal">
        <div className="modal-header">
          <h2 className="modal-title">{conference.title}</h2>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          {/* Conference Details */}
          <div className="conference-details">
            <div className="conference-info">
              <div className="info-item">
                <span className="info-label">Date:</span>
                <span className="info-value">{conference.date}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Venue:</span>
                <span className="info-value">{conference.venue}</span>
              </div>
              {conference.attendees && (
                <div className="info-item">
                  <span className="info-label">Attendees:</span>
                  <span className="info-value">{conference.attendees}+ Students</span>
                </div>
              )}
            </div>

            {/* Conference Flyer */}
            <div className="conference-flyer">
              <img 
                src={conference.flyer} 
                alt={`${conference.title} Flyer`}
                className="flyer-image"
              />
            </div>
          </div>

          {/* Description */}
          <div className="conference-description">
            <h3>About the Conference</h3>
            <p>{conference.description}</p>
          </div>

          {/* Highlights */}
          {conference.highlights && conference.highlights.length > 0 && (
            <div className="conference-highlights">
              <h3>Key Highlights</h3>
              <ul className="highlights-list">
                {conference.highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Speakers Section */}
          <div className="speakers-section">
            <h3>Featured Speakers</h3>
            <div className="speakers-grid">
              {conference.speakers.map((speaker, index) => (
                <div key={index} className="speaker-card">
                  <div className="speaker-header">
                    <div className="speaker-image">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="speaker-photo"
                      />
                    </div>
                    <div className="speaker-info">
                      <h4 className="speaker-name">{speaker.name}</h4>
                      {speaker.title && (
                        <p className="speaker-title">{speaker.title}</p>
                      )}
                    </div>
                  </div>
                  <div className="speaker-message">
                    <p>"{speaker.message}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="modal-actions">
            <button className="action-btn secondary" onClick={onClose}>
              Close
            </button>
            <button className="action-btn primary">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceModal;
