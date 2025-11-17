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
                  src="/Merblin.jpg" 
                  alt="Joseph Asare (Merblin) - CEO & Founder"
                />
                <div className="ceo-badge">
                  <span>CEO & Founder</span>
                </div>
              </div>
              <div className="ceo-info">
                <h3 className="ceo-name">Joseph Asare (Merblin)</h3>
                <p className="ceo-title">Chief Executive Officer</p>
                <p className="ceo-description">
                  A visionary educator and mentor committed to student excellence. Merblin founded 
                  MerbsConnect to inspire, equip, and connect students for success. His vision is 
                  simple: Impact is the Reason.
                </p>
                <div className="ceo-achievements">
                  <div className="achievement">
                    <span className="achievement-number">6+</span>
                    <span className="achievement-label">Years Experience</span>
                  </div>
                  <div className="achievement">
                    <span className="achievement-number">10K+</span>
                    <span className="achievement-label">Students Impacted</span>
                  </div>
                </div>
                <div className="ceo-social">
                  <a href="https://www.linkedin.com/in/joseph-asare-280210242?" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">💼</a>
                  <a href="https://www.instagram.com/iam_merblin?igsh=MWNkeW5kZWZmdnkzOA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">📷</a>
                  <a href="mailto:merblinasare10@gmail.com" className="social-icon" title="Email">📧</a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Photo Section */}
          <div className="team-photo-section">
            <div className="team-photo-card">
              <div className="team-photo">
                <img 
                  src="/team.jpg" 
                  alt="MerbsConnect Team"
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
                  At MerbsConnect, our strength lies in our people. We are a passionate community of 
                  Executives, Ambassadors, Representatives, and Creative Leads united by one mission: 
                  Impact is the Reason.
                  We lead initiatives like the Merbs Series, Start Right Conference, StudyAbroad Plus, 
                  and All You Need (AYN), which transform mentorship, learning, and student empowerment 
                  on campuses and beyond.
                  Each member contributes uniquely to our shared vision of helping students learn, 
                  connect, and lead purposefully.
                </p>
                <div className="explore-team-section">
                  <h4>Meet the MerbsConnect Team</h4>
                  <p>Click here to explore profiles of our Executives, Reps, and Ambassadors with photos, roles, and short bios.</p>
                  <a href="/team-profiles" className="explore-team-btn">Explore Team Profiles</a>
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
