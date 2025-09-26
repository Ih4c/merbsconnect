import React, { useEffect, useState } from 'react';
import '../../styles/MerbsAbout.css';

const MerbsAbout: React.FC = () => {
  const descriptionLines = [
    "MerbsConnect is an innovative, student-focused mentorship platform empowering learners across all disciplines.",
    "We provide students with the tools, guidance, and opportunities to excel academically, grow personally, and succeed professionally.",
    "Through our structured programs and initiatives, students gain access to:",
    "📘 Educational resources that strengthen academic performance.",
    "🌱 Mentorship and personal development that nurture leadership.",
    "🌍 Study abroad and global opportunities that expand horizons.",
    "🎤 Conferences, Outreach, and workshops that inspire growth and networking.",
    "At MerbsConnect, we bridge the gap between academic learning and real-world application.",
    "Our community brings together students, mentors, and professionals from diverse fields to collaborate, learn, and rise together.",
    "MerbsConnect is more than a platform — it’s a thriving Community where students explore new opportunities, unlock potential, and build valuable connections that last a lifetime."
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
          <h2 className="section-title">📖About MERBS Connect</h2>

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
                To empower students and professionals through educational platforms, mentorship, conferences, outreach programs, and global opportunities,
                fostering academic excellence and career advancement in an increasingly connected world.
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
                To be the leading global platform that connects education, mentorship,
                and opportunities — creating a world where every student can access transformative experiences and achieve career success.
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
                  <span>Inclusive Communit - ensuring every student belongs, learns,and thrives.</span>
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
