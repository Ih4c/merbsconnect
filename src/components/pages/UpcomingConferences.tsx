import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Card from '../ui/Card';
import '../../styles/Pages.css';

const UpcomingConferences: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="page-container">
        <div className="auth-required">
          <h2>Authentication Required</h2>
          <p>Please log in to view upcoming conference details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Upcoming Conferences</h1>
        <p>Welcome back, {user?.firstName}! Here are the upcoming events you can attend.</p>
      </div>

      <div className="conference-details">
        <div className="main-conference">
          <h2>Start Right Conference 2026</h2>
          <div className="conference-info">
            <div className="info-grid">
              <div className="info-item">
                <h3>📅 Date & Time</h3>
                <p>June 15-17, 2026</p>
                <p>9:00 AM - 6:00 PM daily</p>
              </div>
              <div className="info-item">
                <h3>📍 Location</h3>
                <p>Tech Convention Center</p>
                <p>123 Innovation Drive, Tech City, TC 12345</p>
              </div>
              <div className="info-item">
                <h3>🎯 Theme</h3>
                <p>"Innovating for Tomorrow"</p>
                <p>Focus on emerging technologies and career development</p>
              </div>
              <div className="info-item">
                <h3>👥 Expected Attendance</h3>
                <p>2,000+ professionals</p>
                <p>50+ industry speakers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="conference-highlights">
          <h3>Conference Highlights</h3>
          <div className="highlights-grid">
            <Card
              title="Keynote Speakers"
              description="Industry leaders sharing insights on technology trends, career advancement, and innovation strategies."
            />
            <Card
              title="Networking Sessions"
              description="Connect with professionals, potential mentors, and industry experts in structured networking events."
            />
            <Card
              title="Workshop Sessions"
              description="Hands-on workshops covering technical skills, leadership development, and career planning."
            />
            <Card
              title="Career Fair"
              description="Meet with top companies and explore exciting career opportunities in your field."
            />
            <Card
              title="Innovation Showcase"
              description="Discover cutting-edge technologies and innovative solutions from startups and established companies."
            />
            <Card
              title="Panel Discussions"
              description="Engage in thought-provoking discussions on industry challenges and future opportunities."
            />
          </div>
        </div>

        <div className="agenda-section">
          <h3>3-Day Agenda Overview</h3>
          <div className="agenda-days">
            <div className="day-schedule">
              <h4>Day 1 - June 15</h4>
              <ul>
                <li>9:00 AM - Registration & Welcome Coffee</li>
                <li>10:00 AM - Opening Keynote</li>
                <li>11:30 AM - Industry Panel: Future of Work</li>
                <li>1:00 PM - Networking Lunch</li>
                <li>2:30 PM - Technical Workshops</li>
                <li>4:00 PM - Career Development Sessions</li>
                <li>6:00 PM - Welcome Reception</li>
              </ul>
            </div>
            <div className="day-schedule">
              <h4>Day 2 - June 16</h4>
              <ul>
                <li>9:00 AM - Morning Keynote</li>
                <li>10:30 AM - Innovation Showcase</li>
                <li>12:00 PM - Networking Lunch</li>
                <li>1:30 PM - Breakout Sessions</li>
                <li>3:00 PM - Career Fair</li>
                <li>5:00 PM - Panel: Emerging Technologies</li>
                <li>7:00 PM - Networking Dinner</li>
              </ul>
            </div>
            <div className="day-schedule">
              <h4>Day 3 - June 17</h4>
              <ul>
                <li>9:00 AM - Final Keynote</li>
                <li>10:30 AM - Success Stories Panel</li>
                <li>12:00 PM - Closing Lunch</li>
                <li>1:30 PM - Action Planning Workshop</li>
                <li>3:00 PM - Resource Fair</li>
                <li>4:30 PM - Closing Ceremony</li>
                <li>5:30 PM - Final Networking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="registration-info">
          <h3>Registration Information</h3>
          <div className="pricing-tiers">
            <div className="tier">
              <h4>Early Bird (Until March 1, 2026)</h4>
              <p className="price">$299</p>
              <p>Includes all sessions, meals, and networking events</p>
            </div>
            <div className="tier">
              <h4>Regular (March 2 - May 1, 2026)</h4>
              <p className="price">$399</p>
              <p>Includes all sessions, meals, and networking events</p>
            </div>
            <div className="tier">
              <h4>Late Registration (After May 1, 2026)</h4>
              <p className="price">$499</p>
              <p>Subject to availability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingConferences;
