import React from 'react';
import '../../styles/AllYouNeedSection.css';

const AllYouNeedSection: React.FC = () => {
  const services = [
    {
      id: 'merbsstore',
      title: 'MerbsStore',
      description: 'Get your Merbs Series books, branded T-shirts, stationery, and more.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Explore Store',
      onClick: () => {
        // TODO: Link to MerbsStore platform when ready
        console.log('Navigate to MerbsStore');
      }
    },
    {
      id: 'photoshoot',
      title: 'Photoshoot Studio',
      description: 'Book studio sessions for professional photos, ID shots, or creative projects.',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482b224b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Book Now',
      onClick: () => {
        // TODO: Link to booking system when ready
        console.log('Navigate to Photoshoot booking');
      }
    },
    {
      id: 'studentservices',
      title: 'Student Services',
      description: 'Access academic help and creative design services for projects or events.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Get Support',
      onClick: () => {
        // TODO: Link to student services when ready
        console.log('Navigate to Student Services');
      }
    },
    {
      id: 'printing',
      title: 'Flyer Design & Printing',
      description: 'Bring your business, event, or campaign to life with flyers that inspire action and leave a lasting impression.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Get Started',
      onClick: () => {
        // TODO: Link to printing services when ready
        console.log('Navigate to Printing & Design');
      }
    },
    {
      id: 'advertise',
      title: 'Advertise Your Product',
      description: 'Promote your business or product through our platform and reach more customers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Start Advertising',
      onClick: () => {
        // TODO: Link to advertising platform when ready
        console.log('Navigate to Advertising platform');
      }
    }
  ];

  const handleExplorePlatform = () => {
    // TODO: Link to main AYN platform when created
    console.log('Navigate to AYN Platform');
  };

  return (
    <section className="allyouneed-section" id="allyouneed">
      <div className="allyouneed-container">
        <div className="section-header">
          <h2 className="section-title">
            MerbsConnect <span className="ayn-highlight">AYN</span> (All You Need)
          </h2>
          <p className="section-subtitle">
            Shop. Book. Create. Explore a range of service and opportunity tailored for <span className="highlight-text">Students & Entrepreneurs</span>
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{service.title}</h3>
                </div>
                
                <p className="card-description">{service.description}</p>
                
                <button 
                  className="card-button"
                  onClick={service.onClick}
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="explore-platform-section">
          <button 
            className="explore-platform-button"
            onClick={handleExplorePlatform}
          >
            Explore Platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllYouNeedSection;
