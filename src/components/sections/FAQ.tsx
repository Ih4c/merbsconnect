import React, { useState } from 'react';
import '../../styles/FAQ.css';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "What is MerbsConnect and how does it work?",
      answer: "MerbsConnect is a global student empowerment platform that equips learners and young professionals with mentorship, academic resources, and real-world opportunities. Through conferences, Study Abroad Plus, Launch Plus, HangOut, Outreach, StudyHub, and All You Need, we bridge the gap between learning and leadership, helping every student reach their full potential."
    },
    {
      id: 2,
      question: "Who can join MerbsConnect?",
      answer: "Any student, graduate, or young professional passionate about learning, growth, and impact can join. Whether you're in high school, university, or already on your career journey, MerbsConnect has a space designed for you."
    },
    {
      id: 3,
      question: "How can I register for the Start Right Conference?",
      answer: "You can register by clicking the 'Register Now' button on the StartRight Conference section or visiting our events page. The process is simple and completely free. Sign up to secure your spot and receive updates about the program and schedule."
    },
    {
      id: 4,
      question: "What is the StudyAbroad Plus program, and what does it offer?",
      answer: "Our StudyAbroad Plus program is designed to guide students at every stage of their university journey, whether you're a freshman exploring future options or a final-year student preparing your graduate school applications. We provide insider tips, step-by-step guidance, and mentorship through every phase of the international education process. From selecting universities and applying for scholarships to preparing for interviews and understanding visa processes, StudyAbroad Plus ensures you're never alone on your journey abroad. Our goal is to help you apply smarter, stand out stronger, and confidently achieve your dream of studying abroad."
    },
    {
      id: 5,
      question: "What is the StudyHub?",
      answer: "StudyHub is MerbsConnect's learning center, where students can access university-level courses such as Calculus, Algebra, Statistics, Differential Equations, and more. Each course comes with step-by-step lessons, quizzes, and progress tracking to help students master their academics."
    },
    {
      id: 6,
      question: "What can I find under 'All You Need (AYN)'?",
      answer: "MerbsConnect AYN (All You Need) is your lifestyle and creativity space. You'll find the MerbsStore, Photoshoot Studio, Printing & Design services, Student Services, and Advertise Your Product — everything a student or young creator needs to grow personally and professionally."
    },
    {
      id: 7,
      question: "Are there any costs associated with MerbsConnect services?",
      answer: "MerbsConnect offers free and premium services to ensure every student can access the right kind of support regardless of their journey.\n\nFree Services: These are open to all students and focus on learning, mentorship, and community building. They include: StartRight Conference, Launch Plus, HangOut, Outreach, and uConnect.\n\nPremium Services: These programs and services provide personalized mentorship, academic guidance, and creative solutions at a professional level. They include StudyAbroad Plus and All You Need (AYN).\n\nMerbsConnect also provides discounts, scholarships, and financial aid for qualifying students to make these premium opportunities accessible to everyone."
    },
    {
      id: 8,
      question: "Can international students use MerbsConnect?",
      answer: "Absolutely! MerbsConnect serves students worldwide. Our virtual events, mentorship sessions, and StudyAbroad Plus program are accessible across 25+ countries, connecting students to a global network of mentors and opportunities."
    },
    {
      id: 9,
      question: "How do I get started with MerbsConnect?",
      answer: "Simply create an account using the Register/Login button on our website. Once registered, you'll gain access to programs, mentorship, StudyHub courses, and updates about upcoming events."
    },
    {
      id: 10,
      question: "What kind of support do you provide to students?",
      answer: "We provide holistic support — academic mentoring, career guidance, networking opportunities, and study abroad preparation. Our team is also available 24/7 through live chat and email."
    },
    {
      id: 11,
      question: "How can I become a MerbsConnect Ambassador or Representative?",
      answer: "Applications for ambassadors and representatives open periodically. Follow MerbsConnect on social media or subscribe to our newsletter to be notified when new opportunities are available."
    },
    {
      id: 12,
      question: "How can I collaborate or volunteer with MerbsConnect?",
      answer: "We welcome collaborations from educators, institutions, and student leaders. To partner or volunteer, contact us through our Contact page or email: support@merbsconnect.com."
    },
    {
      id: 13,
      question: "How can I stay updated on upcoming events and opportunities?",
      answer: "Subscribe to our newsletter or follow MerbsConnect on all social media platforms to receive weekly updates, success stories, and event reminders."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions (FAQs)</h2>
          <p className="section-subtitle">
            Find answers to common questions about MerbsConnect and how we help students stay connected to their success.
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openFAQ === faq.id ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="faq-icon">
                    {openFAQ === faq.id ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-sidebar">
            <div className="help-card">
              <div className="help-icon">❓</div>
              <h3>Still have questions?</h3>
              <p>Can't find the answer you're looking for? Our support team is here to help!</p>
              <button className="contact-support-btn">Contact Support</button>
            </div>

            <div className="quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/startright">Start Right Conference</a></li>
                <li><a href="#about">MerbsConnect</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="/startright">Conference Platform</a></li>
              </ul>
            </div>

            <div className="popular-topics">
              <h4>Popular Topics</h4>
              <div className="topic-tags">
                <span className="topic-tag">Registration</span>
                <span className="topic-tag">Conferences</span>
                <span className="topic-tag">Study Abroad</span>
                <span className="topic-tag">Mentorship</span>
                <span className="topic-tag">Scholarships</span>
                <span className="topic-tag">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
