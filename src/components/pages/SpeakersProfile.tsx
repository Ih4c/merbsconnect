import React from 'react';
import '../../styles/SpeakersProfile.css';

const speakers = [
    {
        name: 'Dr. Mrs. Irene Kafui Vorsah Amponsah',
        title: 'Senior Lecturer | Researcher | STEM Ambassador | Mentor',
        topic: 'Personal Growth, Building Relationships & Seizing Opportunities',
        aiPerspective: 'Ethical AI use, data-driven learning, and empowering women in STEM.',
        bio: 'A distinguished academic and UNDP statistics expert, Dr. Irene has mentored students across AIMS-Ghana, KOICA, IMCS-Pax Romana, and many organizations. She challenged students to embrace growth, build meaningful networks, and maximize university opportunities.',
        image: '/speakers/dr-irene-vorsah.jpg'
    },
    {
        name: 'Hilda Abena Wilson',
        title: 'Valedictorian, UCC College of Agriculture & Natural Sciences, 2024',
        topic: 'Roadmaps to Academic Success',
        aiPerspective: 'Using AI to support learning without replacing effort and discipline.',
        bio: 'A passionate IT enthusiast whose story reflects perseverance and focus. Hilda guided students through academic planning, goal setting, and building a strong educational foundation.',
        image: '/speakers/hilda-wilson.jpg'
    },
    {
        name: 'Mr. Bright Oppong',
        title: 'The CV Master | Career Coach | Resume Expert',
        topic: 'Professional CVs, Résumés & Communication',
        aiPerspective: 'Use AI to enhance CVs, but avoid generic templates.',
        bio: 'Founder of The CV Master with 500+ transformed careers. His session equipped students with professional writing skills, employability strategies, and communication excellence.',
        image: '/speakers/bright-oppong.jpg'
    },
    {
        name: 'Dr. Charles Hackman Kwamena Essel',
        title: 'Educator | STEM & Innovation Advocate | Entrepreneur',
        topic: 'Branding, Innovation, Scholarships & Career Opportunities',
        aiPerspective: 'AI as a tool for creativity, innovation, and entrepreneurship.',
        bio: 'A visionary in gamification, big data, and STEM empowerment. He shared insights on scholarships, personal branding, internships, and building innovative skills.',
        image: '/speakers/dr-charles-essel.jpg'
    },
    {
        name: 'Mr. Samuel Kwabena Adotei',
        title: 'Educator | Former SRC President | Governance & Research Leader',
        topic: 'Leadership, Spirituality & Balance in Student Life',
        aiPerspective: 'Ethics, intellectual property & institutional policies on AI.',
        bio: 'A servant-leader with a strong passion for youth development. His message emphasized the importance of leadership, discipline, and striking a balance between academics and personal growth.',
        image: '/speakers/samuel-adotei.jpg'
    },
    {
        name: 'Cyrus The King',
        title: 'CEO, Cyrus The King Group | Investor',
        topic: 'Special Guest Contribution',
        aiPerspective: 'The future belongs to those who master the tools of their time — and right now, that tool is AI.',
        bio: 'He challenged students to learn prompt engineering, build digital skills, and use AI to create value beyond assignments.',
        image: '/speakers/cyrus-the-king.jpg'
    }
];

const SpeakersProfile: React.FC = () => {
    return (
        <div className="speakers-profile-page">
            <div className="speakers-header">
                <h1>MEET THE SPEAKERS</h1>
                <p>Start Right Conference 2025</p>
            </div>

            <div className="speakers-grid">
                {speakers.map((speaker, index) => (
                    <div key={index} className="speaker-profile-card">
                        <div className="speaker-image-container">
                            <img src={speaker.image} alt={speaker.name} className="speaker-profile-image" />
                        </div>
                        <div className="speaker-content">
                            <h2 className="speaker-name">{speaker.name}</h2>
                            <h3 className="speaker-title">{speaker.title}</h3>

                            <div className="speaker-section">
                                <span className="label">Topic:</span>
                                <p>{speaker.topic}</p>
                            </div>

                            <div className="speaker-section">
                                <span className="label">AI Panel Perspective:</span>
                                <p>{speaker.aiPerspective}</p>
                            </div>

                            <div className="speaker-section bio">
                                <span className="label">Bio:</span>
                                <p>{speaker.bio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpeakersProfile;
