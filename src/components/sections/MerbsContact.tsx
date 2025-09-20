import React, { useState } from 'react';
import '../../styles/MerbsContact.css';

const MerbsContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      content: 'merbsconnect@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📱',
      title: 'Call Us',
      content: '+233 54 313 2386',
      description: 'Mon-Fri from 9am to 5pm'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      content: 'Cape Coast, Ghana',
      description: 'Come say hello at our office'
    },
  ];

  return (
    <section className="merbs-contact" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your journey with MERBS Connect? We're here to help you every step of the way.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information Cards */}
          <div className="contact-info-section">
            <h3 className="contact-info-title">Contact Information</h3>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-icon">{info.icon}</div>
                  <h4 className="contact-title">{info.title}</h4>
                  <p className="contact-content-text">{info.content}</p>
                  <p className="contact-description">{info.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-container">
              <h3 className="form-title">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="startright">StartRight Conference</option>
                    <option value="study-abroad">Study Abroad Program</option>
                    <option value="student-companion">Student Companion</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Contact Section */}
        <div className="additional-contact">
          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://web.facebook.com/merblin.asare.3" className="social-link">
                <span className="social-icon">📘</span>
                <span>Facebook</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">🐦</span>
                <span>Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/merbsconnect" className="social-link">
                <span className="social-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/thisismerbsconnect/" className="social-link">
                <span className="social-icon">📷</span>
                <span>Instagram</span>
              </a>
              <a href="https://www.youtube.com/@MerbsConnect" className="social-link">
                <span className="social-icon">📺</span>
                <span>YouTube</span>
              </a>
            </div>
          </div>

          <div className="newsletter-section">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates and opportunities</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerbsContact;
