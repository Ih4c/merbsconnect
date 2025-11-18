import React from 'react';
import '../../styles/MerbsHubSection.css';

const MerbsHubSection: React.FC = () => {
  const levelCards = [
    {
      id: 'freshman',
      level: 'Freshman',
      levelNumber: '(Level 100)',
      buttonText: 'Courses and more',
      buttonColor: 'blue',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      onClick: () => {
        console.log('Navigate to Freshman courses');
      }
    },
    {
      id: 'sophomore',
      level: 'Sophomore',
      levelNumber: '(Level 200)',
      buttonText: 'Courses and more',
      buttonColor: 'red',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      onClick: () => {
        console.log('Navigate to Sophomore courses');
      }
    },
    {
      id: 'junior',
      level: 'Junior',
      levelNumber: '(Level 300)',
      buttonText: 'Courses and more',
      buttonColor: 'green',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      onClick: () => {
        console.log('Navigate to Junior courses');
      }
    },
    {
      id: 'senior',
      level: 'Senior',
      levelNumber: '(Level 400)',
      buttonText: 'Courses and more',
      buttonColor: 'orange',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      onClick: () => {
        console.log('Navigate to Senior courses');
      }
    }
  ];

  return (
    <section className="merbshub-section" id="merbshub">
      <div className="merbshub-container">
        {/* Section Header */}
        <div className="series-header">
          <h2 className="series-title">
            Merbs <span className="series-highlight">Series</span>: Your Guide to Success
          </h2>
          <p className="series-description">
            Expert-crafted courses, flashcards, quizzes, summaries, problem sets, and revision tools tailored for every level — from your first day on campus to your final exam.
          </p>
        </div>

        {/* Level Cards Grid */}
        <div className="level-cards-grid">
          {levelCards.map((card) => (
            <div key={card.id} className={`level-card ${card.buttonColor}`}>
              <div className="level-card-image">
                <img src={card.image} alt={card.level} />
              </div>
              
              <div className="level-card-content">
                <h3 className="level-title">
                  {card.level} <span className="level-number">{card.levelNumber}</span>
                </h3>
                <button 
                  className={`level-card-button ${card.buttonColor}`}
                  onClick={card.onClick}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerbsHubSection;
