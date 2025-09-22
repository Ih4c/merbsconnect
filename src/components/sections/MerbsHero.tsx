import React, { useState, useEffect } from 'react';
import '../../styles/MerbsHero.css';


const MerbsHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Professional images for MERBS Connect
  const slideImages = [
    '/merbs-photo.png', // MERBS group photo
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
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
              Welcome to <span className="brand-highlight">MERBS Connect</span>
            </h1>
            
            <p className="merbs-hero-subtitle">
            Building a world where no student is left behind simply because they lacked guidance, 
            where potential is nurtured, purpose is discovered, 
            and every young dreamer is empowered to rise.
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
