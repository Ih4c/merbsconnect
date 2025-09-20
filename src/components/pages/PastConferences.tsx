import React from 'react';
import Card from '../ui/Card';
import '../../styles/Pages.css';

interface PastConferencesProps {
  onConferenceClick?: (conference: any) => void;
}

const PastConferences: React.FC<PastConferencesProps> = ({ onConferenceClick }) => {

  const pastEvents = [
    {
      id: '2024',
      title: 'StartRight 2024: Digital Transformation',
      date: 'March 15-17, 2024',
      venue: 'Lagos Convention Center, Nigeria',
      attendees: 2500,
      description: 'A transformative conference focusing on digital innovation and business transformation in the modern era.',
      flyer: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['AI in Business', 'Remote Work Strategies', 'Digital Marketing Trends', 'Blockchain Technology', 'Cybersecurity'],
      speakers: [
        {
          name: 'Dr. Amina Hassan',
          image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
          title: 'Tech Innovation Expert',
          message: 'Digital transformation is not just about technology, it\'s about reimagining how we create value for our communities.'
        },
        {
          name: 'Prof. Chidi Okafor',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title: 'Business Strategy Consultant',
          message: 'The future belongs to those who can adapt quickly and embrace change as an opportunity for growth.'
        },
        {
          name: 'Sarah Adebayo',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          title: 'Digital Marketing Strategist',
          message: 'Success in the digital age requires understanding your audience and delivering authentic value consistently.'
        }
      ]
    },
    {
      id: '2023',
      title: 'StartRight 2023: Innovation & Growth',
      date: 'November 10-12, 2023',
      venue: 'Abuja International Conference Center',
      attendees: 2100,
      description: 'Exploring innovative approaches to sustainable business growth and entrepreneurship in Africa.',
      flyer: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      highlights: ['Startup Funding', 'Leadership Development', 'Tech Entrepreneurship', 'Sustainable Business'],
      speakers: [
        {
          name: 'Kemi Adeosun',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80',
          title: 'Venture Capitalist',
          message: 'Innovation thrives when we create ecosystems that support bold ideas and passionate entrepreneurs.'
        },
        {
          name: 'Olumide Soyombo',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
          title: 'Serial Entrepreneur',
          message: 'The key to sustainable growth is building businesses that solve real problems for real people.'
        }
      ]
    },
    {
      id: '2022',
      title: 'StartRight 2022: Resilience & Recovery',
      date: 'September 8-10, 2022',
      venue: 'Port Harcourt Cultural Center',
      attendees: 1800,
      description: 'Building resilient businesses and communities in the post-pandemic world.',
      flyer: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Crisis Management', 'Business Pivoting', 'Mental Health in Business', 'Remote Leadership'],
      speakers: [
        {
          name: 'Dr. Funmi Iyanda',
          image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80',
          title: 'Resilience Coach',
          message: 'True resilience comes from understanding that every challenge is an opportunity to grow stronger.'
        }
      ]
    }
  ];

  const handleViewDetails = (event: any) => {
    if (onConferenceClick) {
      onConferenceClick(event);
    }
  };

  return (
    <>
      <div className="page-container">
        <div className="page-header">
          <h1>Past Conferences</h1>
          <p className="page-subtitle">
            A look back at our successful events and the impact we've made
          </p>
        </div>

        <div className="page-content">
          <section className="conference-stats">
            <div className="stats-grid">
              <Card>
                <h3>10,000+</h3>
                <p>Total Attendees</p>
              </Card>
              <Card>
                <h3>165+</h3>
                <p>Expert Speakers</p>
              </Card>
              <Card>
                <h3>4</h3>
                <p>Successful Years</p>
              </Card>
              <Card>
                <h3>95%</h3>
                <p>Satisfaction Rate</p>
              </Card>
            </div>
          </section>

          <section className="past-events">
            <h2>Previous Events</h2>
            <div className="events-timeline">
              {pastEvents.map((event, index) => (
                <Card key={index} className="event-card">
                  <div className="event-year">{event.id}</div>
                  <h3>{event.title}</h3>
                  <div className="event-stats">
                    <span><strong>{event.attendees}+</strong> Attendees</span>
                    <span><strong>{event.speakers.length}</strong> Speakers</span>
                  </div>
                  <div className="event-highlights">
                    <h4>Key Topics:</h4>
                    <ul>
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="event-meta">
                    <span className="event-date">{event.date}</span>
                    <span className="event-venue">{event.venue}</span>
                  </div>
                  <button 
                    className="view-details-btn"
                    onClick={() => handleViewDetails(event)}
                  >
                    View Full Details
                  </button>
                </Card>
              ))}
            </div>
          </section>

        <section className="testimonials">
          <Card>
            <h2>What Attendees Said</h2>
            <div className="testimonial-grid">
              <blockquote>
                "Start Right Conference changed my perspective on entrepreneurship. The networking opportunities were incredible!"
                <cite>- Sarah Johnson, Tech Entrepreneur</cite>
              </blockquote>
              <blockquote>
                "The speakers were world-class and the content was immediately actionable. Highly recommend!"
                <cite>- Michael Chen, Marketing Director</cite>
              </blockquote>
              <blockquote>
                "Best professional development investment I've made. The connections I made are still valuable today."
                <cite>- Emily Rodriguez, Business Consultant</cite>
              </blockquote>
            </div>
          </Card>
        </section>
        </div>

      </div>

    </>
  );
};

export default PastConferences;
