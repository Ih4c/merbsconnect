import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ProgramsSection.css';

const ProgramsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleStartRightExplore = () => {
    navigate('/startright');
  };

  const programs = [
    {
      id: 'startright',
      title: 'Start Right Conference',
      description: 'Kickstart your academic journey with our inspiring start right conference.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isActive: true,
      buttonText: 'Explore Platform',
      onButtonClick: handleStartRightExplore
    },
    {
      id: 'studyabroad',
      title: 'Study Abroad Plus',
      description: 'Explore international education opportunities and broaden your horizons.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isActive: false,
      buttonText: 'Explore Platform',
      onButtonClick: () => {}
    },
    {
      id: 'launchplus',
      title: 'LaunchPlus',
      description: 'Get guidance and support for your startup with our mentorship program.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isActive: false,
      buttonText: 'Explore Platform',
      onButtonClick: () => {}
    },
    {
      id: 'hangout',
      title: 'HangOut',
      description: 'Connect, relax, and unwind in our vibrant student hangouts.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isActive: false,
      buttonText: 'Explore More',
      onButtonClick: () => {}
    },
    {
      id: 'outreach',
      title: 'Outreach',
      description: 'Engage with communities that inspire and make a difference.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isActive: false,
      buttonText: 'Explore More',
      onButtonClick: () => {}
    },
    {
      id: 'uconnect',
      title: 'uConnect',
      description: 'Access a space for members to network and collaborate.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isActive: false,
      buttonText: 'Explore More',
      onButtonClick: () => {}
    }
  ];

  return (
    <section className="programs-section" id="programs">
      <div className="programs-container">
        <div className="section-header">
          <h2 className="section-title">Our Programs</h2>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className={`program-card ${!program.isActive ? 'inactive' : ''}`}>
              <div className="card-image">
                <img src={program.image} alt={program.title} />
                {!program.isActive && (
                  <div className="coming-soon-overlay">
                    <span className="coming-soon-badge">Coming Soon</span>
                  </div>
                )}
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{program.title}</h3>
                </div>
                
                <p className="card-description">{program.description}</p>
                
                <button 
                  className={`card-button ${!program.isActive ? 'disabled' : ''}`}
                  onClick={program.onButtonClick}
                  disabled={!program.isActive}
                >
                  {program.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
