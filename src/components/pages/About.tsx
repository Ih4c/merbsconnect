import React from 'react';
import Card from '../ui/Card';
import '../../styles/Pages.css';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <section className="about-mission">
          <Card>
            <h2>About Start Right Conference</h2>
            <p>
              The Start Right Conference is the official annual launchpad for first-year university students
              and a space for continuing students to renew their journey with clarity and focus. It equips
              participants with the mindset, skills, and network needed to thrive in academics, leadership,
              career, and life.
            </p>
            <p>
              Through powerful sessions led by lecturers, valedictorians, student leaders, industry experts,
              innovators, and professionals, students gain practical tools and inspiration to navigate
              university successfully and prepare for future opportunities.
            </p>
            <p style={{ fontWeight: 600, fontSize: '1.1rem', marginTop: '1.5rem', color: '#eb0c17' }}>
              Don't just start university — Start Right.
            </p>
          </Card>
        </section>

        <section className="about-vision">
          <Card>
            <h2>Vision 🌍</h2>
            <p>
              To build a generation of students who begin every new chapter of their lives with confidence,
              resilience, and a clear roadmap to success — academically, professionally, and personally.
            </p>
          </Card>
        </section>

        <section className="about-mission-statement">
          <Card>
            <h2>Mission 🎯</h2>
            <p style={{ marginBottom: '1rem' }}>
              The Start Right Conference empowers first-year and continuing students to:
            </p>
            <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>Establish strong foundations for academic excellence and leadership.</li>
              <li>Gain practical skills in AI, CV building, entrepreneurship, finance, and personal growth.</li>
              <li>Connect with mentors, achievers, and professionals who share real strategies for success.</li>
              <li>Cultivate the resilience, confidence, and networks needed to thrive beyond the classroom.</li>
            </ul>
          </Card>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <Card>
              <h3>Excellence 🎓</h3>
              <p>We strive for the highest academic, leadership, and personal development standards.</p>
            </Card>
            <Card>
              <h3>Confidence 💪</h3>
              <p>We empower students to begin boldly and face challenges with courage.</p>
            </Card>
            <Card>
              <h3>Resilience 🔥</h3>
              <p>We inspire persistence and strength to overcome obstacles.</p>
            </Card>
            <Card>
              <h3>Growth 🌱</h3>
              <p>We create an environment where students continually develop knowledge, skills, and character.</p>
            </Card>
            <Card>
              <h3>Innovation 🤖</h3>
              <p>We embrace technology, creativity, and entrepreneurship as tools for shaping the future.</p>
            </Card>
            <Card>
              <h3>Integrity 🤝</h3>
              <p>We promote honesty, discipline, and accountability in learning and leadership.</p>
            </Card>
            <Card>
              <h3>Community 🌍</h3>
              <p>We build networks of students, mentors, and professionals who uplift and support one another.</p>
            </Card>
            <Card>
              <h3>Impact 🚀</h3>
              <p>We exist to transform lives and equip students to create meaningful societal change.</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
