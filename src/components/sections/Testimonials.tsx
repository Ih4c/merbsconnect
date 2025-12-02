import React, { useState, useEffect } from 'react';
import '../../styles/Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    // Featured Testimonials (What Our Students Say)
    {
      id: 1,
      name: "Vivian Andoh",
      role: "BSc. Statistics",
      university: "University of Cape Coast",
      image: "/vivian-andoh.jpg",
      testimonial: "Through the MerbsConnect Start Right Conference, I learned how to set SMART goals in my academics. The goals that I set must be Specific, Measurable, Achievable, Relevant, and Time-Bound. Setting SMART goals helps develop well-defined, actionable objectives that are attainable and align with your values and principles, allowing you to stay focused and motivated to achieve success.",
      rating: 5,
      program: "Start Right Conference"
    },
    {
      id: 2,
      name: "John Ansah Adams",
      role: "BSc Mathematics and Statistics",
      university: "University of Cape Coast",
      image: "/john-adams.jpg",
      testimonial: "The Start Right Conference 2025 provided me with valuable insights into artificial intelligence, particularly from the presentations by Dr. Irene and Dr. Charles. I also gained a lot of knowledge about leadership from Mr. Samuel's presentation. That day was truly enlightening and has had a significant impact on me. I'm very grateful for the experience, and I look forward to participating in the Start Right Conference 2026.",
      rating: 5,
      program: "Start Right Conference"
    },
    {
      id: 3,
      name: "Francis Jeja Tignaln-nachor",
      role: "Mathematics and Statistics",
      university: "University of Cape Coast",
      image: "/francis-jeja.jpg",
      testimonial: "The Merbsconnect Association has profoundly impacted my personal and academic growth by providing essential guidance through the Start Right program, strategic exam insights via the Merbs Series, and the confidence to pursue higher education through the Study Abroad Seminar.",
      rating: 5,
      program: "MerbsConnect: Impact is the Reason"
    },
    // More Success Stories
    {
      id: 4,
      name: "Philipa Semuwaa Agyin",
      role: "UCC Alumna, Mathematics with Economics",
      university: "University of Cape Coast",
      image: "/philipa-agyin.jpg",
      testimonial: "As a graduate, I look back and see how impactful the StartRight Conference is. It equips new students with mentorship and practical knowledge, giving them a strong foundation to succeed in university life and beyond.",
      rating: 5,
      program: "Start Right Conference 2024"
    },
    {
      id: 5,
      name: "Joshua Achire",
      role: "Student",
      university: "Western Michigan University",
      image: "/joshua-achire.jpg",
      testimonial: "Most students start at level 100, confused about how to approach their studies, but I didn’t go through this because of Merbs Series and tutorials. The books had topics arranged in the way the classes were structured, and after learning each topic, there were past quizzes and exam questions to test your knowledge. With the Merbs series, no exam was difficult; it was just another opportunity to practice concepts learned and carefully explained in the series.",
      rating: 5,
      program: "Merbs Series: Your Guide to Success"
    },
    {
      id: 6,
      name: "Priscilla Arhin",
      role: "Student",
      university: "AIMS Cameron",
      image: "/priscilla-arhin.jpg",
      testimonial: "Before joining MerbsConnect, I felt unprepared for the challenges of higher education and my dream of studying abroad. The Start Right mentorship program, organized by MerbsConnect, taught me essential academic skills, from study strategies to time management. In contrast, their study abroad sessions guided me through goal setting, CV and SOP writing, and the application process. Start Right gave me the confidence, discipline, and foundation I needed to succeed academically and pursue my ambitions abroad.",
      rating: 5,
      program: "Start Right & Study Abroad"
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
