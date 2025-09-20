import React, { useState, useEffect } from 'react';
import '../../styles/Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Computer Science Graduate",
      university: "University of Lagos",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      testimonial: "MERBS Connect transformed my career trajectory. The StartRight Conference connected me with industry leaders, and now I'm working at a top tech company in Silicon Valley. The networking opportunities were incredible!",
      rating: 5,
      program: "StartRight Conference 2024"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Administration Student",
      university: "Covenant University",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      testimonial: "The mentorship and guidance I received through MERBS Connect was invaluable. They helped me secure an internship abroad and provided continuous support throughout my journey. Highly recommended!",
      rating: 5,
      program: "Student Mentorship Program"
    },
    {
      id: 3,
      name: "Aisha Okonkwo",
      role: "Engineering Graduate",
      university: "University of Ibadan",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      testimonial: "Thanks to MERBS Connect, I was able to attend conferences that opened doors I never knew existed. The platform's comprehensive approach to student development is unmatched.",
      rating: 5,
      program: "Conference Participant"
    },
    {
      id: 4,
      name: "David Adebayo",
      role: "Medical Student",
      university: "University of Benin",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      testimonial: "The professional development workshops and networking events have been game-changers for my career. MERBS Connect truly cares about student success and it shows in everything they do.",
      rating: 5,
      program: "Professional Development Workshop"
    },
    {
      id: 5,
      name: "Grace Okafor",
      role: "Economics Graduate",
      university: "Ahmadu Bello University",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      testimonial: "From conference attendance to career guidance, MERBS Connect has been instrumental in my professional growth. The connections I made have led to amazing opportunities.",
      rating: 5,
      program: "Career Development Program"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Real stories from students who have transformed their careers through MERBS Connect
          </p>
        </div>

        <div className="testimonials-content">
          {/* Featured Testimonial */}
          <div className="featured-testimonial">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="student-image">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                  />
                </div>
                <div className="student-info">
                  <h3 className="student-name">{testimonials[currentTestimonial].name}</h3>
                  <p className="student-role">{testimonials[currentTestimonial].role}</p>
                  <p className="student-university">{testimonials[currentTestimonial].university}</p>
                  <div className="rating">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">
                  {testimonials[currentTestimonial].testimonial}
                </p>
                <div className="program-badge">
                  {testimonials[currentTestimonial].program}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="testimonial-navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>

          {/* Statistics */}
          <div className="testimonial-stats">
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Student Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Success Stories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9/5</span>
              <span className="stat-label">Average Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">85%</span>
              <span className="stat-label">Career Advancement</span>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="all-testimonials">
          <h3 className="grid-title">More Success Stories</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="mini-testimonial-card">
                <div className="mini-header">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="mini-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <div className="mini-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="mini-testimonial">
                  "{testimonial.testimonial.substring(0, 120)}..."
                </p>
                <span className="mini-program">{testimonial.program}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
