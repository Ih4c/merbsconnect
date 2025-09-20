import React from 'react';
import '../../styles/MerbsAbout.css';

const MerbsAbout: React.FC = () => {
  return (
    <section className="merbs-about" id="about">
      <div className="merbs-about-container">
        <div className="section-header">
          <h2 className="section-title">About MERBS Connect</h2>
          <p className="section-subtitle">
            Bridging the gap between academic excellence and professional success
          </p>
        </div>

        <div className="about-content">
          {/* Mission Section */}
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <div className="icon-wrapper">🎯</div>
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
                To empower students and professionals with comprehensive educational platforms, 
                innovative conference experiences, and robust support systems that foster academic 
                excellence and career advancement in an increasingly connected world.
              </p>
              <div className="card-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Educational Excellence</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Professional Development</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Global Networking</span>
                </div>
              </div>
            </div>

            {/* Vision Section */}
            <div className="vision-card">
              <div className="card-icon">
                <div className="icon-wrapper">🌟</div>
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To become the leading global platform that seamlessly connects education, 
                professional growth, and international opportunities, creating a world where 
                every student has access to transformative experiences and career success.
              </p>
              <div className="card-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Global Leadership</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Seamless Integration</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Transformative Impact</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🎓</div>
                <h4>Excellence</h4>
                <p>Commitment to the highest standards in education and professional development</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Collaboration</h4>
                <p>Building strong partnerships and fostering meaningful connections worldwide</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🚀</div>
                <h4>Innovation</h4>
                <p>Embracing cutting-edge technologies and creative solutions for learning</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌍</div>
                <h4>Inclusivity</h4>
                <p>Creating opportunities accessible to students from all backgrounds and regions</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Students Empowered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Partner Universities</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Countries Reached</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerbsAbout;
