import React from 'react';
import Card from '../ui/Card';
import { ScrollAnimate } from '../../utils/useScrollAnimation';
import '../../styles/Pages.css';

const About: React.FC = () => {
  const values = [
    { icon: '🎓', title: 'Excellence', desc: 'We strive for the highest academic, leadership, and personal development standards.' },
    { icon: '💪', title: 'Confidence', desc: 'We empower students to begin boldly and face challenges with courage.' },
    { icon: '🔥', title: 'Resilience', desc: 'We inspire persistence and strength to overcome obstacles.' },
    { icon: '🌱', title: 'Growth', desc: 'We create an environment where students continually develop knowledge, skills, and character.' },
    { icon: '🤖', title: 'Innovation', desc: 'We embrace technology, creativity, and entrepreneurship as tools for shaping the future.' },
    { icon: '🤝', title: 'Integrity', desc: 'We promote honesty, discipline, and accountability in learning and leadership.' },
    { icon: '🌍', title: 'Community', desc: 'We build networks of students, mentors, and professionals who uplift and support one another.' },
    { icon: '🚀', title: 'Impact', desc: 'We exist to transform lives and equip students to create meaningful societal change.' }
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <ScrollAnimate animation="fadeUp">
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
        </ScrollAnimate>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <ScrollAnimate animation="slideLeft" delay={100}>
            <section className="about-vision">
              <Card>
                <h2>Vision 🌍</h2>
                <p>
                  To build a generation of students who begin every new chapter of their lives with confidence,
                  resilience, and a clear roadmap to success — academically, professionally, and personally.
                </p>
              </Card>
            </section>
          </ScrollAnimate>

          <ScrollAnimate animation="slideRight" delay={200}>
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
          </ScrollAnimate>
        </div>

        <ScrollAnimate animation="fadeUp" delay={100}>
          <section className="about-values" style={{ marginTop: '3rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <ScrollAnimate key={index} animation="scaleUp" delay={index * 80}>
                  <Card>
                    <h3>{value.title} {value.icon}</h3>
                    <p>{value.desc}</p>
                  </Card>
                </ScrollAnimate>
              ))}
            </div>
          </section>
        </ScrollAnimate>
      </div>
    </div>
  );
};

export default About;
