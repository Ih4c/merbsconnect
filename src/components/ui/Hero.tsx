import React, { useState, useEffect } from 'react';
import '../../styles/Hero.css';

interface HeroProps {
  onRegisterClick: () => void;
  onLearnMoreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick, onLearnMoreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const slideImages = [
    '/startright.jpg',
    '/start.jpg'
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [slideImages.length]);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2026-01-15T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background Slideshow */}
      <div className="hero-background-slideshow">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`background-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Floating Particles */}
      <div className="hero-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      {/* Main Content */}
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div className="hero-text-content">

            {/* Conference Badge */}
            <div className="conference-badge">
              <span className="badge-icon">🎓</span>
              <span className="badge-text">ANNUAL CONFERENCE</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-main-title">
              <span className="title-line-1">START</span>
              <span className="title-line-2">RIGHT</span>
              <span className="title-line-3">Conference <span className="year-highlight">'26</span></span>
            </h1>

            {/* Tagline */}
            <p className="hero-tagline">
              Begin Your Journey With Purpose
            </p>

            {/* Countdown Timer */}
            <div className="countdown-wrapper">
              <span className="countdown-label-main">Event Starts In</span>
              <div className="countdown-container">
                <div className="countdown-item">
                  <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-item">
                  <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-item">
                  <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="countdown-label">Mins</span>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-item">
                  <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="countdown-label">Secs</span>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">👥</span>
                <span className="feature-text">500+ Attendees</span>
              </div>
              <div className="feature-divider"></div>
              <div className="feature-item">
                <span className="feature-icon">🎤</span>
                <span className="feature-text">5+ Speakers</span>
              </div>
              <div className="feature-divider"></div>
              <div className="feature-item">
                <span className="feature-icon">📍</span>
                <span className="feature-text">UCC Campus</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <button className="hero-btn primary" onClick={onRegisterClick}>
                <span className="btn-icon">🎟️</span>
                Register Now
              </button>
              <button className="hero-btn secondary" onClick={onLearnMoreClick}>
                Learn More
                <span className="btn-arrow">→</span>
              </button>
            </div>

            {/* Trust Badge */}
            <div className="trust-badge">
              <span className="trust-text">Powered by</span>
              <span className="trust-brand">MerbsConnect</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
