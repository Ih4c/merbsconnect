import React, { useState } from 'react';
import '../../styles/FAQ.css';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "What is MERBS Connect and how does it work?",
      answer: "MERBS Connect is a comprehensive educational platform that empowers students and professionals through innovative conference experiences, study abroad programs, and student companion services. We provide end-to-end support for your educational and career journey, from conference attendance to international opportunities."
    },
    {
      id: 2,
      question: "How can I register for the StartRight Conference?",
      answer: "You can register for the StartRight Conference by clicking on the 'Register Now' button in the StartRight section or by visiting our dedicated conference platform at /startright. The registration process is simple and includes options for different ticket types based on your needs."
    },
    {
      id: 3,
      question: "What study abroad programs do you offer?",
      answer: "Our Study Abroad program is currently in development and will launch soon. It will include partnerships with top universities worldwide, scholarship guidance, application support, and comprehensive visa assistance. Sign up for notifications to be the first to know when it becomes available."
    },
    {
      id: 4,
      question: "How does the Student Companion service work?",
      answer: "The Student Companion service (coming soon) will provide personalized mentorship, academic resources, career guidance, and peer connections. Our experienced mentors will work with you one-on-one to help you achieve your academic and career goals."
    },
    {
      id: 5,
      question: "Are there any costs associated with MERBS Connect services?",
      answer: "We offer both free and premium services. Basic access to our platform, resources, and some events are free. Premium services like personalized mentorship, exclusive conferences, and study abroad support have associated costs. We also offer scholarships and financial aid for qualifying students."
    },
    {
      id: 6,
      question: "Can international students use MERBS Connect?",
      answer: "Absolutely! MERBS Connect is designed to serve students globally. We have partnerships with universities in over 25 countries and our virtual events are accessible worldwide. Our team includes international education experts who understand the unique challenges faced by international students."
    },
    {
      id: 7,
      question: "How do I get started with MERBS Connect?",
      answer: "Getting started is easy! Simply create an account using the Register/Login button in the navigation menu. Once registered, you'll have access to our platform where you can explore upcoming events, access resources, and connect with our community."
    },
    {
      id: 8,
      question: "What kind of support do you provide to students?",
      answer: "We provide comprehensive support including academic guidance, career counseling, networking opportunities, conference access, mentorship programs, and resources for international education. Our team is available 24/7 through our live chat feature and email support."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about MERBS Connect and our services
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
                <li><a href="#startright">StartRight Conference</a></li>
                <li><a href="#about">About MERBS Connect</a></li>
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
