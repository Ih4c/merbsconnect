import React, { useState, useEffect } from 'react';
import '../../styles/Gallery.css';

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  event: string;
  date: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Google Drive links for photo albums
  const src2025Link = 'https://drive.google.com/drive/folders/15P_uGGHGH-0LX9y__HdrPlskb0HePRtD';
  const hangout2025Link = 'https://drive.google.com/drive/folders/1is1okAHgJ3vTRtr7bRAxwa_kERSMDnZF?usp=sharing';

  const handleViewFullAlbum = (link: string) => {
    window.open(link, '_blank');
  };

  const categories = ['all', 'conferences', 'workshops', 'networking', 'awards'];

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Start Right Conference 2025',
      image: '/SRC25.jpg',
      category: 'conferences',
      event: 'Start Right Conference 2025',
      date: 'February 2025 | '
    },
    {
      id: '2',
      title: 'MerbsConnect Hangout 2025',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'networking',
      event: 'Impact is The Reason ✅MerbsConnect Hangout 2025',
      date: '2025'
    },
    {
      id: '3',
      title: 'Leadership Workshop',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'workshops',
      event: 'Leadership Development Workshop',
      date: 'January 2024'
    },
    {
      id: '4',
      title: 'Excellence Awards Ceremony',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'awards',
      event: 'Student Excellence Awards',
      date: 'December 2023'
    },
    {
      id: '5',
      title: 'Career Development Summit',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      category: 'conferences',
      event: 'Career Development Summit',
      date: 'November 2023'
    },
    {
      id: '6',
      title: 'Innovation Workshop',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      category: 'workshops',
      event: 'Innovation & Entrepreneurship Workshop',
      date: 'October 2023'
    }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const isSRC2025 = selectedImage?.id === '1';
  const isHangout2025 = selectedImage?.id === '2';

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h1 className="gallery-title">Event Gallery</h1>
          <p className="gallery-subtitle">
            Capturing moments of growth, learning, and inspiration from our events
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

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => handleImageClick(item)}
            >
              <div className="gallery-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-event">{item.event}</p>
                    <span className="item-date">{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="gallery-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Photos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Events</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Memories</span>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.event}</p>
              <span>{selectedImage.date}</span>
              {(isSRC2025 || isHangout2025) && (
                <button 
                  className="view-album-btn" 
                  onClick={() => handleViewFullAlbum(isSRC2025 ? src2025Link : hangout2025Link)}
                >
                  View Full Album →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
