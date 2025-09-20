import React, { useState } from 'react';
import '../../styles/Videos.css';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: string;
  date: string;
  views: number;
}

const Videos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const categories = ['all', 'conferences', 'testimonials', 'workshops', 'highlights'];

  const videos: Video[] = [
    {
      id: '1',
      title: 'StartRight Conference 2024 Highlights',
      description: 'Experience the best moments from our flagship conference featuring inspiring speakers and networking opportunities.',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:30',
      category: 'highlights',
      date: 'March 2024',
      views: 2500
    },
    {
      id: '2',
      title: 'Student Success Story - Sarah Johnson',
      description: 'Sarah shares how StartRight conferences transformed her academic journey and career prospects.',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616c0763c5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '8:45',
      category: 'testimonials',
      date: 'February 2024',
      views: 1800
    },
    {
      id: '3',
      title: 'Leadership Workshop Session',
      description: 'Key insights from our leadership development workshop featuring industry experts.',
      thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '25:15',
      category: 'workshops',
      date: 'January 2024',
      views: 3200
    },
    {
      id: '4',
      title: 'Full Conference Recording - Day 1',
      description: 'Complete recording of the first day of StartRight Conference 2023 featuring keynote speakers.',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:45:30',
      category: 'conferences',
      date: 'December 2023',
      views: 5600
    },
    {
      id: '5',
      title: 'Alumni Impact Stories',
      description: 'Hear from our alumni about how StartRight shaped their careers and personal growth.',
      thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '12:20',
      category: 'testimonials',
      date: 'November 2023',
      views: 2100
    },
    {
      id: '6',
      title: 'Career Development Workshop',
      description: 'Practical tips and strategies for career advancement from industry professionals.',
      thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:45',
      category: 'workshops',
      date: 'October 2023',
      views: 2800
    }
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="videos-page">
      <div className="videos-container">
        {/* Header */}
        <div className="videos-header">
          <h1 className="videos-title">Video Library</h1>
          <p className="videos-subtitle">
            Watch inspiring sessions, testimonials, and highlights from our events
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="videos-grid">
          {filteredVideos.map(video => (
            <div 
              key={video.id} 
              className="video-card"
              onClick={() => handleVideoClick(video)}
            >
              <div className="video-thumbnail">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="thumbnail-image"
                />
                <div className="play-overlay">
                  <div className="play-button">▶</div>
                </div>
                <span className="video-duration">{video.duration}</span>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-meta">
                  <span className="video-date">{video.date}</span>
                  <span className="video-views">{video.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="videos-stats">
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Videos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Total Views</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Hours of Content</span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedVideo.title}</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="video-player">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="modal-info">
              <p className="video-description">{selectedVideo.description}</p>
              <div className="video-meta">
                <span className="video-date">{selectedVideo.date}</span>
                <span className="video-views">{selectedVideo.views.toLocaleString()} views</span>
                <span className="video-duration">{selectedVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
