import React from 'react';
import '../../styles/ConferenceModal.css';

interface Speaker {
  name: string;
  image: string;
  message: string;
  title?: string;
}

interface Conference {
  id?: string;
  title: string;
  date: string;
  venue: string;
  description?: string;
  theme?: string;
  flyer?: string;
  speakers?: Speaker[];
  attendees?: number;
  highlights?: string[];
  keyTopics?: string[];
  panelDiscussion?: {
    theme: string;
    description: string;
    focusAreas: string[];
    closingInsight: string;
  };
}

interface ConferenceModalProps {
  conference: Conference;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

const ConferenceModal: React.FC<ConferenceModalProps> = ({ conference, onClose, onNavigate }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSpeakersProfileClick = () => {
    onClose();
    onNavigate('speakers-profile');
  };

  return (
    <div className="conference-modal-overlay" onClick={handleOverlayClick}>
      <div className="conference-modal">
        <div className="modal-header">
          <h2 className="modal-title">{conference.title}</h2>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          {/* Conference Details with Image */}
          <div className="conference-details-grid">
            {/* Left Side - Info Items */}
            <div className="conference-info-left">
              <div className="info-item-modal">
                <span className="info-label-modal">Date:</span>
                <span className="info-value-modal">{conference.date}</span>
              </div>
              <div className="info-item-modal">
                <span className="info-label-modal">Venue:</span>
                <span className="info-value-modal">{conference.venue}</span>
              </div>
              {conference.attendees && (
                <div className="info-item-modal">
                  <span className="info-label-modal">Attendees:</span>
                  <span className="info-value-modal">{conference.attendees}+ Students</span>
                </div>
              )}
            </div>

            {/* Right Side - Event Image */}
            {conference.flyer && (
              <div className="conference-image-modal">
                <img
                  src={conference.flyer}
                  alt={`${conference.title} Event`}
                  className="event-image"
                />
              </div>
            )}
          </div>

          {/* Description */}
          {conference.description && (
            <div className="conference-description">
              <h3>About the Conference</h3>
              <p>{conference.description}</p>
            </div>
          )}

          {/* Key Topics Explored */}
          {conference.keyTopics && conference.keyTopics.length > 0 && (
            <div className="conference-highlights">
              <h3>Key Topics Explored</h3>
              <div className="highlights-grid">
                {conference.keyTopics.map((item, index) => (
                  <div key={index} className="highlight-box">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          {conference.highlights && conference.highlights.length > 0 && (
            <div className="conference-highlights">
              <h3>Key Highlights</h3>
              <div className="highlights-grid">
                {conference.highlights.map((item, index) => (
                  <div key={index} className="highlight-box">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Panel Discussion Section */}
          {conference.panelDiscussion && (
            <div className="panel-discussion-section">
              <h3 className="panel-title">Panel Discussion Recall</h3>
              <h4 className="panel-theme">
                <strong>Theme:</strong> {conference.panelDiscussion.theme}
              </h4>
              <p className="panel-description">{conference.panelDiscussion.description}</p>

              <h5 className="panel-focus-title">Discussion Focus Areas:</h5>
              <ul className="panel-focus-list">
                {conference.panelDiscussion.focusAreas.map((area, index) => (
                  <li key={index} className="panel-focus-item">{area}</li>
                ))}
              </ul>

              <div className="closing-insight-box">
                <p className="closing-insight-text">
                  <strong>Closing Insight:</strong> {conference.panelDiscussion.closingInsight}
                </p>
              </div>
            </div>
          )}

          {/* Speakers Section - Only show if exists */}
          {conference.speakers && conference.speakers.length > 0 && (
            <div className="speakers-section">
              <h3>Featured Speakers</h3>
              <div className="speakers-grid-modal">
                {conference.speakers.map((speaker, index) => (
                  <div key={index} className="speaker-card-modal">
                    <div className="speaker-header-modal">
                      <div className="speaker-image-modal">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="speaker-photo"
                        />
                      </div>
                      <div className="speaker-info-modal">
                        <h4 className="speaker-name-modal">{speaker.name}</h4>
                        {speaker.title && (
                          <p className="speaker-title-modal">{speaker.title}</p>
                        )}
                      </div>
                    </div>
                    <div className="speaker-message-modal">
                      <p>"{speaker.message}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="modal-actions">
            <button className="action-btn secondary" onClick={handleSpeakersProfileClick}>
              View Speakers Profile
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
