import React from 'react';
import Card from '../ui/Card';
import { ScrollAnimate } from '../../utils/useScrollAnimation';
import '../../styles/Pages.css';

interface PastConferencesProps {
  onConferenceClick?: (conference: any) => void;
}

const PastConferences: React.FC<PastConferencesProps> = ({ onConferenceClick }) => {

  const conferenceEvent = {
    year: '2025',
    title: 'Start Right Conference 2025',
    theme: 'Setting Yourself Up for Success',
    date: 'Saturday, 15th February 2025',
    venue: 'SMS Auditorium',
    attendees: 600,
    flyer: '/SRC25.jpg',
    description: `Start Right Conference 2025 was a transformational experience designed to help students begin their academic and professional journey with clarity, confidence, and purpose.

The atmosphere was charged with excellence as lecturers, valedictorians, student leaders, innovators, career experts, and entrepreneurs delivered high-impact sessions on success, preparation, mindset, and strategy.
Every moment echoed one message:

"You don't just start school — you Start Right."

Participants left equipped with direction, actionable plans, and renewed confidence to take bold steps toward their goals.`,
    keyTopics: [
      'Role of Artificial Intelligence (AI) in Academia',
      'Roadmaps to Academic Excellence',
      'Leadership, Spiritual Life & Academic Balance',
      'Personal Growth & Building Strong Relationships',
      'Scholarships, Internships & Career Opportunities',
      'Digital Entrepreneurship & Future of Work',
      'Branding, CV Writing & Professional Development'
    ],
    highlights: [
      'Expert-led success strategies',
      'Practical skill-building sessions',
      'Real student stories and actionable roadmaps',
      'Deep dive into AI, ethics, and modern learning',
      'Networking with top-performing students and professionals'
    ],
    speakers: [
      {
        name: 'Dr. Irene Kafui Vorsah Amponsah',
        title: 'Senior Lecturer | Researcher | STEM Ambassador',
        image: '/speakers/irene.jpg',
        message: 'Success is not just about what you achieve, but the lives you impact along the way!'
      },
      {
        name: 'Hilda Abena Wilson',
        title: 'Valedictorian, UCC CANS\'24',
        image: '/speakers/hilda.jpg',
        message: 'Your foundation determines your success.'
      },
      {
        name: 'Mr. Bright Oppong (The CV Master)',
        title: 'Career Coach | Resume Expert',
        image: '/speakers/bright.jpg',
        message: 'Your CV is your first impression—make it unforgettable.'
      },
      {
        name: 'Dr. Charles Hackman Kwamena Essel',
        title: 'Educator | STEM & Innovation Advocate',
        image: '/speakers/charles.jpg',
        message: 'Innovation opens doors—prepare yourself to walk through them.'
      },
      {
        name: 'Mr. Samuel Kwabena Adotei',
        title: 'Educator | Former SRC President',
        image: '/speakers/samuel.jpg',
        message: 'Lead yourself well before you lead others.'
      },
      {
        name: 'Cyrus The King',
        title: 'CEO, Cyrus The King Group',
        image: '/speakers/cyrus.jpg',
        message: 'The future belongs to those who master the tools of their time—today, that tool is AI.'
      }
    ],
    panelDiscussion: {
      theme: 'Exploring the Role of Artificial Intelligence (AI) in Academia',
      description: 'One of the most anticipated sessions of SRC 2025 brought together all featured speakers to unpack how Artificial Intelligence is shaping academic life, research, ethics, and future opportunities for students.',
      focusAreas: [
        'How AI is transforming academic work',
        'Should students use AI in school?',
        'Ethical & responsible use of AI',
        'Challenges: plagiarism, integrity, and academic honesty',
        'Leveraging AI for research, innovation & skill-building'
      ],
      closingInsight: 'AI is not the enemy of education — it is a tool that must be used wisely, ethically, and intentionally. Students must be prepared to adapt, innovate, and lead.'
    }
  };

  const stats = [
    { number: '1000+', title: 'Attendees', desc: 'Students, leaders, and dreamers united in one space.' },
    { number: '10+', title: 'Student Leaders Featured', desc: 'Amplifying youth voices and achievements.' },
    { number: '2', title: 'Valedictorians', desc: 'Real stories of academic excellence.' },
    { number: '5+', title: 'Expert Speakers', desc: 'Professionals shaping student success.' },
    { number: '2', title: 'Transformative Editions', desc: 'A movement that continues to grow.' },
    { number: '95%', title: 'Satisfaction Rate', desc: 'Trusted. Impactful. Life-changing.' }
  ];

  const handleViewDetails = () => {
    if (onConferenceClick) {
      onConferenceClick(conferenceEvent);
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <section className="conference-stats">
          <ScrollAnimate animation="fadeUp">
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: '#1a202c' }}>Past Conferences</h1>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem', color: '#2d3748' }}>
              Our conference history reflects our mission — empowering students to rise.
            </p>
          </ScrollAnimate>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <ScrollAnimate key={index} animation="scaleUp" delay={index * 100}>
                <Card>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#eb0c17', marginBottom: '0.5rem' }}>{stat.number}</h3>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1a202c', marginBottom: '0.5rem' }}>{stat.title}</h4>
                  <p style={{ color: '#4a5568' }}>{stat.desc}</p>
                </Card>
              </ScrollAnimate>
            ))}
          </div>
        </section>

        {/* Previous Events Section */}
        <ScrollAnimate animation="fadeUp" delay={200}>
          <section style={{ marginTop: '5rem', marginBottom: '3rem' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '3rem',
              color: '#1a202c'
            }}>
              Previous Programs
            </h2>

            <div style={{ maxWidth: '380px', margin: '0 auto' }}>
              <ScrollAnimate animation="scaleUp" delay={100}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
                  border: '2px solid #fee2e2',
                  textAlign: 'center'
                }}>
                  {/* Year Badge */}
                  <div style={{
                    display: 'inline-block',
                    background: '#eb0c17',
                    color: 'white',
                    padding: '0.6rem 2rem',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.5px'
                  }}>
                    {conferenceEvent.year}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: '#1a202c',
                    marginBottom: '1.5rem',
                    lineHeight: '1.4'
                  }}>
                    {conferenceEvent.title}: {conferenceEvent.theme}
                  </h3>

                  {/* Attendees & Speakers Count */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#2d3748'
                  }}>
                    <span>{conferenceEvent.attendees}+ Attendees</span>
                    <span>{conferenceEvent.speakers?.length || 0} Speakers</span>
                  </div>

                  {/* Key Topics Section */}
                  <div style={{
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}>
                    <h4 style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#1a202c',
                      marginBottom: '1rem'
                    }}>
                      Key Topics:
                    </h4>
                    <ul style={{
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                      lineHeight: '2',
                      color: '#c53030',
                      fontSize: '0.9rem'
                    }}>
                      {conferenceEvent.keyTopics.slice(0, 5).map((topic, index) => (
                        <li key={index}>• {topic}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Date & Venue */}
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#4a5568',
                    marginBottom: '1.75rem',
                    fontWeight: '500',
                    lineHeight: '1.6'
                  }}>
                    {conferenceEvent.date}<br />{conferenceEvent.venue}
                  </p>

                  {/* View Full Details Button */}
                  <button
                    onClick={handleViewDetails}
                    style={{
                      width: '100%',
                      padding: '1rem 2rem',
                      background: '#eb0c17',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(235, 12, 23, 0.3)',
                      letterSpacing: '0.3px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(235, 12, 23, 0.45)';
                      e.currentTarget.style.background = '#d10b15';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(235, 12, 23, 0.3)';
                      e.currentTarget.style.background = '#eb0c17';
                    }}
                  >
                    View Full Details
                  </button>
                </div>
              </ScrollAnimate>
            </div>
          </section>
        </ScrollAnimate>
      </div>
    </div>
  );
};

export default PastConferences;
