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
          {/* Centered content */}
          <div className="merbs-hero-text-content">
            <h2 className="merbs-hero-subtitle-header">MerbsConnect Today</h2>
            
            <h1 className="merbs-hero-main-title">
              <strong>You belong at <span className="brand-highlight">MerbsConnect</span></strong>
            </h1>
            
            <p className="merbs-hero-subtitle">
              Stay connected to your { " " }
              <span className="word-fader">
                <span>Success</span>
                <span>Excellence</span>
                <span>Growth</span>
                <span>Potential</span>
                <span>Purpose</span>
              </span>
            </p>

            <div className="merbs-hero-actions">
              <button 
                className="merbs-hero-btn primary" 
                onClick={() => scrollToSection('about')}
              >
                Discover More
              </button>
              <button 
                className="merbs-hero-btn secondary" 
                onClick={() => scrollToSection('programs')}
              >
                Explore Programs
              </button>
              <button 
                className="merbs-hero-btn tertiary" 
                onClick={() => scrollToSection('merbshub')}
              >
                Explore Merbshub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerbsHero;
