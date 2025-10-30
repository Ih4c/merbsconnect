import React from 'react';
import '../../styles/MerbsHubSection.css';

const MerbsHubSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hubCards = [
    {
      id: 'studyhub',
      title: 'Study Hub',
      subtitle: 'Learn with Purpose.',
      buttonText: 'Academics',
      buttonColor: 'blue',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      onClick: () => {
        // This will be directed to student companion section when you show me where
        console.log('Navigate to Study Hub/Student Companion');
      }
    },
    {
      id: 'programs',
      title: 'Programs',
      subtitle: 'Connect with Mentors.',
      buttonText: 'Conference',
      buttonColor: 'red',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      onClick: () => scrollToSection('programs')
    },
    {
      id: 'allyouneed',
      title: 'All You Need',
      subtitle: 'Shop, Book, Create.',
      buttonText: 'Lifestyle',
      buttonColor: 'green',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      onClick: () => scrollToSection('allyouneed')
    }
  ];

  return (
    <section className="merbshub-section" id="merbshub">
      <div className="merbshub-container">
        {/* Hub Cards */}
        <div className="hub-cards-grid">
          {hubCards.map((card) => (
            <div key={card.id} className={`hub-card ${card.buttonColor}`}>
              <div className="card-image-section">
                <img src={card.image} alt={card.title} />
                <div className="card-overlay">
                  <h3 className="card-title">{card.title}</h3>
                </div>
              </div>
              
              <div className="card-content-section">
                <h4 className="card-subtitle">{card.subtitle}</h4>
                <button 
                  className={`hub-card-button ${card.buttonColor}`}
                  onClick={card.onClick}
                >
                  {card.buttonText} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="merbs-story-section">
          <h2 className="story-title">
            <span className="story-highlight">The Merbs Connect Story</span>
          </h2>
          <p className="story-description">
            From Learning to Leading - See how we empower students globally.
          </p>
          <button 
            className="watch-now-button"
            onClick={() => {
              // TODO: Connect to video when provided by user
              console.log('Watch Now clicked - Video to be added later');
            }}
          >
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MerbsHubSection;
