import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TeamProfiles.css';

// Team member interface
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

const TeamProfiles: React.FC = () => {
  const navigate = useNavigate();

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Top Executives data
  const topExecutives: TeamMember[] = [
    {
      id: 1,
      name: "Joseph Asare (Merblin)",
      role: "CEO & Founder",
      image: "/Merblin.jpg",
      bio: "A visionary educator and mentor committed to student excellence. Merblin founded MerbsConnect to inspire, equip, and connect students for success."
    },
    {
      id: 2,
      name: "Samuel Odai",
      role: "CEO Assistant",
      image: "/samuel-odai.jpg",
      bio: "A committed and resourceful executive assistant who supports leadership operations across the MerbsConnect ecosystem. Samuel ensures that plans, communication, and initiatives are executed with excellence."
    },
    {
      id: 3,
      name: "Philipa Semuwah Agyin",
      role: "General Secretary",
      image: "/philipa-agyin.jpg",
      bio: "A highly organized and reliable administrator committed to smooth communication and coordination within MerbsConnect. Philipa ensures that information flows effectively and that executive activities stay on track."
    },
    {
      id: 4,
      name: "Eric Agyei",
      role: "Finance & Database Manager",
      image: "/eric-agyei.jpg",
      bio: "A disciplined and detail-driven financial strategist dedicated to ensuring transparency, accuracy, and sustainable growth. Eric manages the financial records and database systems that keep MerbsConnect running efficiently."
    },
    {
      id: 5,
      name: "Joshua Achire",
      role: "Study Abroad & SRC Manager",
      image: "/joshua-achire.jpg",
      bio: "A passionate mentor who guides students toward global opportunities. Joshua supports the Study Abroad pathway and SRC engagement, helping students access the resources and confidence needed to excel internationally."
    },
    {
      id: 6,
      name: "Priscilla Arhin",
      role: "General Welfare",
      image: "/priscilla-arhin.jpg",
      bio: "A compassionate and proactive welfare leader dedicated to supporting student needs. Priscilla fosters a positive, encouraging environment that helps every student feel valued, supported, and connected."
    },
    {
      id: 7,
      name: "David Tetteh",
      role: "Photographer | Graphic & T-Shirt Designer | CEO of DATE Media",
      image: "/david-tetteh.jpg",
      bio: "A talented creative professional with a passion for visual storytelling. David captures the brand’s identity through photography and design, helping MerbsConnect communicate impact through compelling visuals."
    },
    {
      id: 8,
      name: "Nathaniel Kweku Tuffour",
      role: "Website Designer & Social Media Manager",
      image: "/nathaniel-tuffour.jpg",
      bio: "A skilled digital strategist focused on elevating MerbsConnect’s online presence. Nathaniel designs modern web experiences and manages social engagement that keeps students informed and connected."
    },
    {
      id: 9,
      name: "Julius Adjetey Sowah",
      role: "Website Designer & Manager",
      image: "/julius-sowah.jpg",
      bio: "A dedicated website developer committed to smooth digital operations. Julius builds and maintains platforms that enhance accessibility, innovation, and the overall MerbsConnect user experience."
    }
  ];

  // Executive 25/26 data
  const executives2526: TeamMember[] = [
    {
      id: 10,
      name: "Francis Jeja Tignaln-nachor",
      role: "Manager & Treasurer",
      image: "/francis-jeja.jpg",
      bio: "A dedicated financial and administrative leader who ensures accountability, stability, and smooth operations. Francis manages key projects with integrity and provides strategic coordination support to the team."
    },
    {
      id: 11,
      name: "Agroh Desmond Selase",
      role: "SRC Manager",
      image: "/agroh-desmond.jpg",
      bio: "A proactive advocate for student engagement and leadership. Desmond Bridges MerbsConnect with student bodies and ensures that student voices, needs, and opportunities remain central to our mission."
    },
    {
      id: 12,
      name: "Veronica Arthur",
      role: "Secretary",
      image: "/veronica-arthur.jpg",
      bio: "An organized and dependable communicator supporting adequate documentation and smooth executive coordination. Veronica ensures timely communication and efficient flow of information within the team."
    },
    {
      id: 13,
      name: "Abigail Quaye",
      role: "Coordinating Secretary",
      image: "/abigail-quaye.jpg",
      bio: "A committed coordinator who oversees planning, scheduling, and execution of executive activities. Abigail strengthens team structure and ensures that every project moves with clarity and purpose."
    },
    {
      id: 14,
      name: "Benedicta Mensah Ghansah",
      role: "Welfare Chairperson",
      image: "/benedicta-mensah.jpg",
      bio: "A compassionate welfare leader dedicated to creating a supportive environment for students. Benedicta champions student needs and fosters a culture of care and encouragement within MerbsConnect."
    },
    {
      id: 15,
      name: "Vivian Andoh",
      role: "Deputy Welfare Chairperson",
      image: "/vivian-andoh.jpg",
      bio: "A supportive and empathetic deputy leader who contributes to student well-being and welfare initiatives. Vivian works closely with the team to ensure every student feels valued and supported."
    },
    {
      id: 16,
      name: "Wahid Abdul Mumin",
      role: "Merbs Series Coordinator",
      image: "/wahid-abdul.jpg",
      bio: "A hardworking academic content coordinator dedicated to shaping the Merbs Series. Wahid supports planning, organizing, and distributing educational materials that help students study smarter."
    },

    {
      id: 17,
      name: "Evans Afrifa",
      role: "Organizer",
      image: "/evans-afrifa.jpg",
      bio: "A dedicated organizer with a passion for teamwork and student engagement. Evans assists in event planning and on-ground coordination, ensuring MerbsConnect programs run smoothly."
    },
    {
      id: 18,
      name: "Abdul-Jalil Ahmed",
      role: "Deputy Organizer",
      image: "/abdul-jalil-ahmed.jpg",
      bio: "An energetic and reliable organizer who contributes to planning and executing MerbsConnect events. Abdul-Jalil supports team logistics and ensures smooth coordination during activities."
    },
    {
      id: 19,
      name: "Louis Be-Ouremwine",
      role: "Assistant Media Head",
      image: "/louis-be-ouremwine.jpg",
      bio: "A skilled media assistant committed to strengthening the creative and visual identity of MerbsConnect. Louis excels in media production, photography, and content development."
    },
    {
      id: 20,
      name: "Jiovani",
      role: "Graphics Designer",
      image: "/jiovani.jpg",
      bio: "A talented and creative graphics designer dedicated to bringing the MerbsConnect brand to life. Jiovani transforms ideas into compelling visual designs that inspire, inform, and engage our student community."
    }
  ];

  // Representatives data
  const representatives: TeamMember[] = [
    {
      id: 21,
      name: "Abigail Quaye",
      role: "Bsc. Actuarial Science",
      image: "/abigail-quaye-rep.jpg",
      bio: "Level 300"
    },
    {
      id: 22,
      name: "Daniel Mawusi",
      role: "B.Ed. Mathematics",
      image: "/daniel-mawusi.jpg",
      bio: "Level 300"
    },
    {
      id: 23,
      name: "Henry Annor",
      role: "BSc Mathematics with Business",
      image: "/henry-annor.jpg",
      bio: "Level 200"
    },
    {
      id: 24,
      name: "Abdul-Jalil Ahmed",
      role: "BSc Computer Science",
      image: "/abdul-jalil-rep.jpg",
      bio: "Level 400"
    },
    {
      id: 25,
      name: "Vivian Nidah",
      role: "Bsc. Computer Science",
      image: "/vivian-nidah.jpg",
      bio: "Level 400"
    }
  ];

  const typingTeamMembers: TeamMember[] = [
    {
      id: 26,
      name: "Benjamin Kwesi Adu",
      role: "Typing Manager",
      image: "/benjamin-adu.jpg",
      bio: "A detail-oriented and efficient manager responsible for producing clean, accurate, and high-quality typed academic content. Benjamin supports the smooth development of the Merbs Series materials."
    },
    {
      id: 27,
      name: "Joseph Asare Merblin",
      role: "Solution Expert",
      image: "/Merblin.jpg",
      bio: "A visionary educator and problem-solver committed to academic excellence. Merblin develops high-quality solutions and explanations that empower students to learn deeply and achieve outstanding results."
    },
    {
      id: 28,
      name: "Francis Jeja Tignaln-nachor",
      role: "Solution Expert",
      image: "/francis-jeja.jpg",
      bio: "A dedicated academic contributor with strong analytical skills. Francis supports the development and verification of solution guides that help students understand complex concepts with confidence."
    },
    {
      id: 29,
      name: "Veronica Arthur",
      role: "Typing Team Member",
      image: "/veronica-arthur.jpg",
      bio: "A committed and reliable team member who supports the smooth preparation of academic content. Veronica brings clarity, consistency, and professionalism to the Merbs Series."
    },
    {
      id: 30,
      name: "Georgina Blay",
      role: "Typing Team Member",
      image: "/georgina-blay.jpg",
      bio: "A focused and hardworking contributor who ensures accuracy and structure in the typing workflow. Georgina helps transform raw academic material into polished, student-ready content."
    },
    {
      id: 31,
      name: "John Ansah Adams",
      role: "Typing Team Member",
      image: "/john-adams.jpg",
      bio: "A disciplined and result-driven typist who supports the creation of high-quality Merbs Series books. John is committed to efficiency and excellence in every assignment."
    },
    {
      id: 32,
      name: "Henry Annor",
      role: "Typing Team Member",
      image: "/henry-annor.jpg",
      bio: "An organized and passionate typist who supports content preparation with accuracy and care. Henry brings consistency and quality to the Merbs Series typing department."
    },
    {
      id: 33,
      name: "Luke Yaw Teye",
      role: "Typing Team Member",
      image: "/luke-teye.jpg",
      bio: "A motivated and meticulous team member who contributes to the smooth development of Merbs Series materials. Luke ensures that students receive clear and well-structured notes."
    },
    {
      id: 34,
      name: "Julius Gazo Tamakloe",
      role: "Typing Team Member",
      image: "/julius-tamakloe.jpg",
      bio: "A dependable and skilled typist dedicated to delivering precise and well-organized academic content. Julius strengthens the quality and speed of the Merbs Series production."
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
          <h1 className="profiles-title">
            Meet the <span className="brand-highlight">MerbsConnect</span> Team
          </h1>
          {/* Description - to be added later */}
          <p className="profiles-description">
            At MerbsConnect, our impact is made possible by our dedicated team of leaders,
            ambassadors, and representatives who guide career journeys.
          </p>

          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <button
              className="nav-btn"
              onClick={() => scrollToSection('top-executives')}
            >
              Top Executive
            </button>
            <button
              className="nav-btn"
              onClick={() => scrollToSection('executives-2526')}
            >
              Executive 25/26
            </button>
            <button
              className="nav-btn"
              onClick={() => scrollToSection('representatives')}
            >
              Representative
            </button>
          </div>
        </div>
      </section>

      {/* Top Executives Section */}
      <section id="top-executives" className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">MerbsConnect Top Executives</h2>
            <p className="section-subtitle">
              Meet the strategic leaders who guide MerbsConnect's mission, vision, and growth.
            </p>
          </div>
          <div className="team-grid">
            {topExecutives.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = '/team.jpg';
                    }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  {member.bio && <p className="member-bio">{member.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive 25/26 Section */}
      <section id="executives-2526" className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Executives 25/26</h2>
            <p className="section-subtitle">
              Our executive team members driving excellence across all MerbsConnect initiatives.
            </p>
          </div>
          <div className="team-grid">
            {executives2526.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = '/team.jpg';
                    }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  {member.bio && <p className="member-bio">{member.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representatives Section */}
      <section id="representatives" className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Representatives</h2>
            <p className="section-subtitle">
              Our ambassadors and representatives connecting students across campuses and communities.
            </p>
          </div>
          <div className="team-grid">
            {representatives.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = '/team.jpg';
                    }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  {member.bio && <p className="member-bio">{member.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typing Team Section */}
      <section id="typing-team" className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Typing Team</h2>
            <p className="section-subtitle">
              Dedicated members ensuring accurate documentation and content creation.
            </p>
          </div>
          <div className="team-grid">
            {typingTeamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = '/team.jpg';
                    }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  {member.bio && <p className="member-bio">{member.bio}</p>}
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
