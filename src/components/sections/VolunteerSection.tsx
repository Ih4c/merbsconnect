import React, { useState } from 'react';
import VolunteerRegistrationForm from '../auth/VolunteerRegistrationForm.tsx';
import '../../styles/VolunteerSection.css';

const VolunteerSection: React.FC = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  const volunteerBenefits = [
    {
      icon: '🤝',
      title: 'Network Building',
      description: 'Connect with like-minded individuals and industry professionals'
    },
    {
      icon: '📚',
      title: 'Skill Development',
      description: 'Gain valuable experience in event management and leadership'
    },
    {
      icon: '🎯',
      title: 'Impact Creation',
      description: 'Be part of transforming students\' lives through education'
    },
    {
      icon: '🏆',
      title: 'Recognition',
      description: 'Receive certificates and recognition for your contributions'
    }
  ];

  return (
    <div className="volunteer-section">
      <div className="volunteer-container">
        <div className="volunteer-content">
          {/* Left side - Content */}
          <div className="volunteer-text-content">
            <div className="volunteer-header">
              <h2 className="volunteer-title">
                Join Our <span className="brand-highlight">Volunteer Team</span>
              </h2>
              <p className="volunteer-subtitle">
                Be part of a movement that empowers students and creates lasting impact. 
                Join our dedicated team of volunteers who make StartRight conferences possible.
              </p>
            </div>

            <div className="volunteer-benefits">
              {volunteerBenefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="volunteer-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Active Volunteers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Events Organized</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Students Impacted</span>
              </div>
            </div>

            <button 
              className="volunteer-cta-btn"
              onClick={() => setShowVolunteerForm(true)}
            >
              Click to Register as Volunteer
            </button>
          </div>

          {/* Right side - Visual */}
          <div className="volunteer-visual">
            <div className="volunteer-image-container">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="Volunteers working together"
                className="volunteer-image"
              />
              <div className="volunteer-overlay">
                <div className="overlay-content">
                  <h3>Make a Difference</h3>
                  <p>Your contribution matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Registration Modal */}
      {showVolunteerForm && (
        <VolunteerRegistrationForm 
          onClose={() => setShowVolunteerForm(false)}
        />
      )}
    </div>
  );
};

export default VolunteerSection;
