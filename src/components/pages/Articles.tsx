import React from 'react';
import Card from '../ui/Card';
import '../../styles/Pages.css';

const Articles: React.FC = () => {
  const articles = [
    {
      title: "10 Essential Skills for New Entrepreneurs",
      excerpt: "Discover the fundamental skills every entrepreneur needs to succeed in today's competitive business landscape.",
      author: "Dr. Amanda Foster",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Entrepreneurship"
    },
    {
      title: "The Future of Remote Work: Trends for 2024",
      excerpt: "Explore how remote work is evolving and what it means for businesses and professionals worldwide.",
      author: "James Mitchell",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Workplace Trends"
    },
    {
      title: "Building Your Professional Network: A Strategic Approach",
      excerpt: "Learn proven strategies for building meaningful professional relationships that advance your career.",
      author: "Lisa Chen",
      date: "February 10, 2024",
      readTime: "10 min read",
      category: "Career Development"
    },
    {
      title: "Digital Marketing Strategies That Actually Work",
      excerpt: "Cut through the noise with these proven digital marketing tactics that deliver real results.",
      author: "Marcus Rodriguez",
      date: "January 22, 2024",
      readTime: "12 min read",
      category: "Marketing"
    },
    {
      title: "Leadership in the Age of AI",
      excerpt: "How artificial intelligence is changing leadership roles and what leaders need to know to stay relevant.",
      author: "Dr. Sarah Kim",
      date: "January 8, 2024",
      readTime: "9 min read",
      category: "Leadership"
    },
    {
      title: "Funding Your Startup: Beyond Traditional Investors",
      excerpt: "Explore alternative funding options for startups, from crowdfunding to revenue-based financing.",
      author: "Robert Thompson",
      date: "December 15, 2023",
      readTime: "11 min read",
      category: "Funding"
    }
  ];

  const categories = ["All", "Entrepreneurship", "Career Development", "Leadership", "Marketing", "Funding", "Workplace Trends"];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Articles & Insights</h1>
        <p className="page-subtitle">
          Expert insights and practical advice for professional growth
        </p>
      </div>

      <div className="page-content">
        <section className="articles-filter">
          <div className="filter-buttons">
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`filter-btn ${index === 0 ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="articles-grid">
          {articles.map((article, index) => (
            <Card key={index} className="article-card">
              <div className="article-category">{article.category}</div>
              <h3>{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-meta">
                <div className="article-author">
                  <strong>{article.author}</strong>
                </div>
                <div className="article-details">
                  <span>{article.date}</span>
                  <span className="read-time">{article.readTime}</span>
                </div>
              </div>
              <button className="read-more-btn">Read More</button>
            </Card>
          ))}
        </section>

        <section className="newsletter-signup">
          <Card>
            <h2>Stay Updated</h2>
            <p>Get the latest articles and insights delivered to your inbox.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </Card>
        </section>

        <section className="featured-topics">
          <h2>Popular Topics</h2>
          <div className="topics-grid">
            <Card>
              <h3>Startup Success</h3>
              <p>Essential guides for launching and scaling your business</p>
            </Card>
            <Card>
              <h3>Career Growth</h3>
              <p>Strategies for advancing your professional journey</p>
            </Card>
            <Card>
              <h3>Leadership Skills</h3>
              <p>Develop the skills needed to lead in today's world</p>
            </Card>
            <Card>
              <h3>Industry Trends</h3>
              <p>Stay ahead with the latest business and tech trends</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Articles;
