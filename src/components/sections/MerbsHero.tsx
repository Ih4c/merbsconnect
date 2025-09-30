import React, { useState, useEffect } from 'react';
import '../../styles/MerbsHero.css';

const MerbsHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Professional images for MERBS Connect
  const slideImages = [
    '/merbs-photo.png', // MERBS group photo
    '/merbs1.jpg',
    '/merbs2.jpg',
    '/merbs3.jpg'
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slideImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="merbs-hero" id="home">
      {/* Background Slideshow */}
      <div className="hero-background-slideshow">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`background-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>
      
      <div className="merbs-hero-container">
        <div className="merbs-hero-content-wrapper">
          {/* Left side - Text content */}
          <div className="merbs-hero-text-content">
            <h1 className="merbs-hero-main-title">
              You belong at <span className="brand-highlight">MerbsConnect</span>
            </h1>
            
            <p className="merbs-hero-subtitle">
              A world where no student is left behind simply because they lack guidance. 
              Here, potential is nurtured, purpose is discovered, and every dreamer is empowered to rise.
              Be guided. Be connected. Be unstoppable..
              <br />
              <p className="merbs-hero-subtitle">
                Stay Connected to your { " " }
                <span className="word-fader">
                  <span>SUCCESS</span>
                  <span>EXCELLENCE</span>
                  <span>GROWTH</span>
                  <span>POTENTIAL</span>
                  <span>PURPOSE</span>
                </span>
              </p>

            </p>

            <div className="merbs-hero-features">
              <div className="feature-item">
                <div className="feature-icon">🎓</div>
                <span>Educational Excellence</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌍</div>
                <span>Global Opportunities</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <span>Professional Network</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌱</div>
                <span>Mentorship for Growth</span>
              </div>
            </div>

            <div className="merbs-hero-actions">
              <button 
                className="merbs-hero-btn primary" 
                onClick={() => scrollToSection('about')}
              >
                Discover More
              </button>
              <button 
                className="merbs-hero-btn secondary" 
                onClick={() => scrollToSection('startright')}
              >
                Explore StartRight
              </button>
            </div>
          </div>

          {/* Right side - Synchronized sliding images */}
          <div className="merbs-hero-image-section">
            <div className="merbs-image-slider">
              {slideImages.map((image, index) => (
                <div
                  key={index}
                  className={`merbs-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image})` }}
                />
              ))}
            </div>
            
            {/* Slide indicators */}
            <div className="merbs-slide-indicators">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  className={`merbs-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerbsHero;
