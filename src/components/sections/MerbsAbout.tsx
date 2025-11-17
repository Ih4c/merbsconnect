import React, { useEffect, useState } from 'react';
import '../../styles/MerbsAbout.css';

const MerbsAbout: React.FC = () => {
  const descriptionLines = [
    "MerbsConnect is an all-in-one platform to empower students and young professionals through mentorship, education, and creativity.",
    "Everything begins here, from the Start Right Conference to Lifestyle and Beyond."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const linesPerSlide = 3;
  const interval = 5000; // 4 seconds per slide

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + linesPerSlide) % descriptionLines.length);
    }, interval);
    return () => clearInterval(timer);
  }, [descriptionLines.length]);

  const currentSet = descriptionLines.slice(currentIndex, currentIndex + linesPerSlide);

  return (
    <section className="merbs-about" id="about">
      <div className="merbs-about-container">
        <div className="section-header">
          <h2 className="section-title">📖About MerbsConnect</h2>

          {/* Modified description with slideshow */}
          <div className="section-subtitle slideshow-wrapper">
            <div key={currentIndex} className="slideshow-slide">
              {currentSet.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
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
                To inspire, equip, and connect students with the knowledge, tools, and networks they need to thrive - academically, professionally, and personally.
                <br />
                We achieve this by focusing on:
              </p>
              <div className="card-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Educational Excellence - resources and tools that strengthen learning.</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Professional Development - mentorship, skills, and career readiness.</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Conference & Outreach - mentorship, skills and career readiness.</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Global Networking - building strong connections that open doors.</span>
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
                To be the leading global platform that connects education, mentorship, and opportunity - creating a world where every student begins their journey with clarity, confidence, and purpose.
                <br />
                We envision a generation of academically excellent, emotionally intelligent, and globally competitive students.
                Through innovation, technology, and mentorship, we aim to nurture leaders who will create meaningful impact in their communities and beyond.
                <br />
                At MerbsConnect, every learner's success story reflects our vision: to guide, grow, and give back.
                <br />
                We envision a future built on:
              </p>
              <div className="card-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Global Leadership - empowering students to lead with impact.</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Seamless Integration - bridging academics, mentorship, and real-world opportunities.</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Transformative Impact - shaping lives and communities through education.</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Inclusive Community  - ensuring every student belongs, learns,and thrives.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h3 className="values-title">Our Core Values</h3>
            <p className="values-intro">These values define who we are, what we stand for, and how we empower students to stay connected to their success.</p>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🎓</div>
                <h4>Excellence</h4>
                <p>We strive for the highest standards in academics, mentorship, and professional growth.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌱 </div>
                <h4>Growth</h4>
                <p>We nurture continuous learning, personal development, and leadership in every student. </p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌍</div>
                <h4>Opportunity</h4>
                <p>We connect students to local and global experiences that open doors to their future</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Community</h4>
                <p>We foster an inclusive, supportive network where collaboration and diversity thrive.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💡 </div>
                <h4>Innovation</h4>
                <p>We embrace creativity and technology to bridge the gap between learning and real-world application.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <h4>Impact</h4>
                <p>We are committed to empowering students to make meaningful contributions to society.</p>
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
