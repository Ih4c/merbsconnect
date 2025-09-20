import React from 'react';
import '../../styles/MeetTheTeam.css';

const MeetTheTeam: React.FC = () => {
  return (
    <section className="meet-the-team" id="meet-the-team">
      <div className="team-container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate professionals dedicated to empowering your educational journey
          </p>
        </div>

        <div className="team-content">
          {/* CEO Card */}
          <div className="ceo-section">
            <div className="ceo-card">
              <div className="ceo-image">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="CEO"
                />
                <div className="ceo-badge">
                  <span>CEO & Founder</span>
                </div>
              </div>
              <div className="ceo-info">
                <h3 className="ceo-name">John Doe</h3>
                <p className="ceo-title">Chief Executive Officer</p>
                <p className="ceo-description">
                  With over 15 years of experience in educational technology and student development, 
                  John leads MERBS Connect with a vision to transform how students access global 
                  opportunities and professional growth.
                </p>
                <div className="ceo-achievements">
                  <div className="achievement">
                    <span className="achievement-number">15+</span>
                    <span className="achievement-label">Years Experience</span>
                  </div>
                  <div className="achievement">
                    <span className="achievement-number">50K+</span>
                    <span className="achievement-label">Students Impacted</span>
                  </div>
                </div>
                <div className="ceo-social">
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">📧</a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Photo Section */}
          <div className="team-photo-section">
            <div className="team-photo-card">
              <div className="team-photo">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="MERBS Connect Team"
                />
                <div className="team-overlay">
                  <div className="overlay-content">
                    <h3>Our Amazing Team</h3>
                    <p>Dedicated professionals working together to create exceptional experiences</p>
                  </div>
                </div>
              </div>
              <div className="team-description">
                <h3>United by Purpose</h3>
                <p>
                  Our diverse team of educators, technologists, and student advocates brings together 
                  decades of combined experience in international education, conference management, 
                  and student support services. We're committed to breaking down barriers and 
                  creating pathways to success for every student we serve.
                </p>
                <div className="team-stats">
                  <div className="stat">
                    <span className="stat-number">25+</span>
                    <span className="stat-label">Team Members</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">12</span>
                    <span className="stat-label">Countries Represented</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Combined Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="team-values">
          <h3>What Drives Us</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Excellence</h4>
              <p>We strive for excellence in everything we do, from student support to platform development</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h4>Global Vision</h4>
              <p>We believe in creating opportunities that transcend borders and connect cultures</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>We continuously innovate to provide cutting-edge solutions for modern education</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h4>Passion</h4>
              <p>Our passion for education and student success drives every decision we make</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
