import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TeamProfiles.css';

// Team member interface
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamProfiles: React.FC = () => {
  const navigate = useNavigate();

  // Team members data - Update with actual team member details
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Joseph Asare",
      role: "CEO & Founder",
      image: "/Merblin.jpg",
      bio: "A visionary educator and mentor committed to student excellence. Merblin founded MerbsConnect to inspire, equip, and connect students for success."
    },
    {
      id: 2,
      name: "Team Member Name",
      role: "Chief Operating Officer",
      image: "/team-member-2.jpg",
      bio: "Brief description of team member's role and contribution to MerbsConnect mission."
    },
    {
      id: 3,
      name: "Team Member Name",
      role: "Head of Programs",
      image: "/team-member-3.jpg",
      bio: "Brief description of team member's role and contribution to MerbsConnect mission."
    },
    {
      id: 4,
      name: "Team Member Name",
      role: "Head of StudyHub",
      image: "/team-member-4.jpg",
      bio: "Brief description of team member's role and contribution to MerbsConnect mission."
    },
    {
      id: 5,
      name: "Team Member Name",
      role: "Ambassador Coordinator",
      image: "/team-member-5.jpg",
      bio: "Brief description of team member's role and contribution to MerbsConnect mission."
    },
    {
      id: 6,
      name: "Team Member Name",
      role: "Creative Lead",
      image: "/team-member-6.jpg",
      bio: "Brief description of team member's role and contribution to MerbsConnect mission."
    }
  ];

  return (
    <div className="team-profiles-page">
      {/* Header Section */}
      <section className="profiles-header">
        <div className="container">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back
          </button>
          <h1 className="profiles-title">Meet the MerbsConnect Team</h1>
          <p className="profiles-subtitle">
            Our passionate Executives, Ambassadors, Representatives, and Creative Leads 
            working together to empower students worldwide
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="profiles-content">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-image">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = '/team.jpg'; // Fallback image
                    }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">({member.role})</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamProfiles;
