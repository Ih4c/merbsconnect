import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/MerbsHero.css';

interface SlideContent {
  image: string;
  type: 'merbs' | 'startright' | 'series';
}

const MerbsHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  // Slides with their respective content types
  const slides: SlideContent[] = [
    { image: '/merbs-photo.png', type: 'merbs' },
    { image: '/merbs1.jpg', type: 'startright' },
    { image: '/merbs2.jpg', type: 'series' },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 8000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const currentType = slides[currentSlide].type;

  return (
    <section className="merbs-hero overlay" id="home">
      {/* Background Slideshow */}
      <div className="hero-background-slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`background-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Dynamic Content Container */}
      <div className="merbs-hero-container">
        <div className="merbs-hero-content-wrapper">
          <div className={`merbs-hero-text-content ${isTransitioning ? 'transitioning' : ''}`}>

            {/* ═══════════════════════════════════════════════════════════
                SLIDE 1: MERBS CONNECT (Main Landing)
                ═══════════════════════════════════════════════════════════ */}
            {currentType === 'merbs' && (
              <div className="slide-content slide-merbs">
                <h1 className="merbs-hero-main-title">
                  You belong at
                  <span className="brand-highlight">MerbsConnect</span>
                </h1>

                <div className="merbs-hero-keywords">
                  <p className="keyword-line">
                    <span className="keyword-learn">LEARN</span> with excellence
                  </p>
                  <p className="keyword-line">
                    <span className="keyword-grow">GROW</span> through community
                  </p>
                  <p className="keyword-line">
                    <span className="keyword-create">CREATE</span> opportunities
                  </p>
                  <p className="keyword-line">
                    <span className="keyword-make">MAKE</span> lasting impact
                  </p>
                  <p className="keyword-line success-line">
                    <span className="keyword-stay">STAY</span> connected to{' '}
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
                    Merbs Series
                  </button>
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════
                SLIDE 2: START RIGHT CONFERENCE
                ═══════════════════════════════════════════════════════════ */}
            {currentType === 'startright' && (
              <div className="slide-content slide-startright">
                <div className="startright-badge">ANNUAL CONFERENCE</div>

                <h1 className="startright-title">
                  <span className="startright-the">The</span>
                  <span className="startright-main">START RIGHT</span>
                  <span className="startright-conf">Conference</span>
                </h1>

                <p className="startright-description">
                  An annual gathering where students and young professionals are empowered
                  to begin their journey with clarity, purpose, and actionable strategies
                  for academic and career success.
                </p>

                <div className="startright-stats">
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Attendees</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Speakers</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">JAN</span>
                    <span className="stat-label">2026</span>
                  </div>
                </div>

                <div className="merbs-hero-actions">
                  <button
                    className="merbs-hero-btn primary startright-btn"
                    onClick={() => navigate('/startright')}
                  >
                    Explore Start Right →
                  </button>
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════
                SLIDE 3: MERBS SERIES
                ═══════════════════════════════════════════════════════════ */}
            {currentType === 'series' && (
              <div className="slide-content slide-series">
                <div className="series-icon">
                  <span className="icon-play">▶</span>
                </div>

                <h1 className="series-title">
                  <span className="series-the">THE</span>
                  <span className="series-main">MERBS</span>
                  <span className="series-sub">SERIES</span>
                </h1>

                <p className="series-tagline">
                  Stories. Insights. Inspiration.
                </p>

                <p className="series-description">
                  Dive into exclusive video content featuring success stories,
                  expert interviews, and transformational insights from leaders
                  shaping the future.
                </p>

                <div className="series-categories">
                  <span className="category-tag">🎓 Education</span>
                  <span className="category-tag">💼 Career</span>
                  <span className="category-tag">🌟 Lifestyle</span>
                  <span className="category-tag">🚀 Growth</span>
                </div>

                <div className="merbs-hero-actions">
                  <button
                    className="merbs-hero-btn primary series-btn"
                    onClick={() => scrollToSection('merbshub')}
                  >
                    <span className="btn-play-icon">▶</span>
                    Watch Now
                  </button>
                  <button
                    className="merbs-hero-btn secondary"
                    onClick={() => scrollToSection('merbshub')}
                  >
                    Browse Episodes
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="indicator-label">
                {slide.type === 'merbs' && 'Home'}
                {slide.type === 'startright' && 'Start Right'}
                {slide.type === 'series' && 'Series'}
              </span>
              <span className="indicator-progress"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerbsHero;
