import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const images = [
    { id: 1, src: '/assets/drone shot.png', category: 'Events & Competitions', title: 'TechFest Aerial View' },
    { id: 2, src: '/assets/interior.png', category: 'Ceremonies & Openings', title: 'Lab Inauguration' },
    { id: 3, src: '/assets/ground level shot.png', category: 'Events & Competitions', title: 'Campus Hackathon' },
    { id: 4, src: '/assets/drone shot.png', category: 'Ceremonies & Openings', title: 'Annual Day' },
    { id: 5, src: '/assets/ground level shot.png', category: 'Events & Competitions', title: 'Robotics Competition' },
    { id: 6, src: '/assets/interior.png', category: 'Ceremonies & Openings', title: 'Alumni Meet' },
  ];

  const filters = ['All', 'Events & Competitions', 'Ceremonies & Openings'];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const openLightbox = (img) => setLightboxImg(img);
  const closeLightbox = () => setLightboxImg(null);

  return (
    <div className="gallery-page">
      <div className="container">
        <div className="section-title fade-in" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>Our Gallery</h1>
          <div className="title-underline"></div>
        </div>

        {/* Filters */}
        <div className="gallery-filters fade-in">
          {filters.map(filter => (
            <button 
              key={filter} 
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid fade-in">
          {filteredImages.map(img => (
            <div key={img.id} className="gallery-item" onClick={() => openLightbox(img)}>
              <img src={img.src} alt={img.title} />
              <div className="gallery-overlay">
                <span className="gallery-img-title">{img.title}</span>
                <span className="gallery-img-category">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-lightbox" onClick={closeLightbox}>&times;</span>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightboxImg.src} alt={lightboxImg.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <h3>{lightboxImg.title}</h3>
              <p>{lightboxImg.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
