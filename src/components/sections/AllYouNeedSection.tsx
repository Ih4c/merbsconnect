import React, { useState, useEffect } from 'react';
import '../../styles/AllYouNeedSection.css';

const AllYouNeedSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // MerbsStore slideshow images
  const merbsStoreImages = [
    '/merbs-t-shirt.jpg',
    '/merbs-t-shirt-1.jpg'
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % merbsStoreImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 'merbsstore',
      title: 'MerbsStore',
      description: 'Get your Merbs Series books, branded T-shirts, stationery, and more.',
      image: merbsStoreImages[currentImageIndex],
      buttonText: 'Explore Store',
      onClick: () => {
        // TODO: Link to MerbsStore platform when ready
        console.log('Navigate to MerbsStore');
      },
      isSlideshow: true,
      slideshowImages: merbsStoreImages
    },
    {
      id: 'merbscreatives',
      title: 'Merbs Creatives',
      description: 'Professional photoshoots, flyer designs, and printing solutions. Perfect for events, businesses, and creative projects.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Create Now',
      onClick: () => {
        // TODO: Link to creative services when ready
        console.log('Navigate to Merbs Creatives');
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
    /*{
      id: 'advertise',
      title: 'Advertise Your Product',
      description: 'Promote your business or product through our platform and reach more customers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Start Advertising',
      onClick: () => {
        // TODO: Link to advertising platform when ready
        console.log('Navigate to Advertising platform');
      }
    }*/
  ];

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
                {service.isSlideshow ? (
                  <div className="slideshow-container">
                    <div className="slideshow-images">
                      {service.slideshowImages.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${service.title} ${index + 1}`}
                          className={`slideshow-image ${index === currentImageIndex ? 'active' : ''}`}
                        />
                      ))}
                    </div>
                    <div className="slideshow-dots">
                      {service.slideshowImages.map((_, index) => (
                        <span
                          key={index}
                          className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <img src={service.image} alt={service.title} />
                )}
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
      </div>
    </section>
  );
};

export default AllYouNeedSection;
