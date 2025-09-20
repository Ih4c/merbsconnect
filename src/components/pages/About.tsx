import React from 'react';
import Card from '../ui/Card';
import '../../styles/Pages.css';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About Start Right Conference</h1>
        <p className="page-subtitle">
          Empowering professionals to start right in their careers and business ventures
        </p>
      </div>

      <div className="page-content">
        <section className="about-mission">
          <Card>
            <h2>Our Mission</h2>
            <p>
              Start Right Conference is dedicated to providing transformative experiences that 
              empower individuals to make the right decisions at the beginning of their professional 
              journeys. We bring together industry leaders, innovative thinkers, and ambitious 
              professionals to share knowledge, build networks, and inspire action.
            </p>
          </Card>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <Card>
              <h3>Excellence</h3>
              <p>We strive for the highest quality in every aspect of our conference experience.</p>
            </Card>
            <Card>
              <h3>Innovation</h3>
              <p>We embrace new ideas and cutting-edge approaches to professional development.</p>
            </Card>
            <Card>
              <h3>Community</h3>
              <p>We foster meaningful connections and lasting professional relationships.</p>
            </Card>
            <Card>
              <h3>Growth</h3>
              <p>We are committed to continuous learning and personal development.</p>
            </Card>
          </div>
        </section>

        <section className="about-team">
          <Card>
            <h2>Our Team</h2>
            <p>
              Our conference is organized by a dedicated team of industry professionals with 
              decades of combined experience in event management, professional development, 
              and business strategy. We are passionate about creating experiences that make 
              a real difference in people's careers.
            </p>
          </Card>
        </section>

        <section className="about-history">
          <Card>
            <h2>Our History</h2>
            <p>
              Founded in 2020, Start Right Conference has grown from a small gathering of 
              entrepreneurs to one of the premier professional development events in the industry. 
              We have helped thousands of professionals launch successful careers and build 
              thriving businesses.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
