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
    <section className="merbs-hero overlay" id="home" >
      {/* Background Slideshow */}
      <div className="hero-background-slideshow">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`background-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div/>
      </div>

      {/* Main Content - Centered */}
      <div className="merbs-hero-container">
        <div className="merbs-hero-content-wrapper">
          <div className="merbs-hero-text-content">
            <h1 className="merbs-hero-main-title">
              <strong>You belong at <span className="brand-highlight">MerbsConnect</span></strong>
            </h1>
            
            {/* Colorful Keywords List */}
            <div className="merbs-hero-keywords">
              <p className="keyword-line">
                <span className="keyword-learn">Learn</span> with excellence
              </p>
              <p className="keyword-line">
                <span className="keyword-grow">Grow</span> through Community
              </p>
              <p className="keyword-line">
                <span className="keyword-create">Create</span> opportunities
              </p>
              <p className="keyword-line">
                <span className="keyword-make">Make</span> lasting impact
              </p>
              <p className="keyword-line success-line">
                <span className="keyword-stay">Stay</span> Connected to your{" "}
                <span className="keyword-success">Success</span>
              </p>
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
                onClick={() => scrollToSection('programs')}
              >
                Explore Programs
              </button>
              <button 
                className="merbs-hero-btn tertiary" 
                onClick={() => scrollToSection('merbshub')}
              >
                Explore Merbs Series
              </button>
            </div>
            
            <div className="merbs-hero-actions-secondary">
              <button 
                className="merbs-hero-btn catalog-btn" 
                onClick={() => scrollToSection('programs')}
              >
                View MerbsConnect Today
              </button>
              <button 
                className="merbs-hero-btn ayn-btn" 
                onClick={() => scrollToSection('allyouneed')}
              >
                Explore AYN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement Space - Can be toggled on/off */}
      <div className="hero-advertisement-space">
        {/* Advertisement content goes here */}
        <div className="ad-placeholder">
          <p className="ad-label">Advertisement Space</p>
        </div>
      </div>
    </section>
  );
};

export default MerbsHero;
