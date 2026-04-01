import React, { useState } from 'react';
import './Gallery.css';

const galleryItems = [
  { id: 1,  src: '/assets/drone shot.png',        category: 'Tech Fest',     title: 'TechFest 2025 – Drone View' },
  { id: 2,  src: '/assets/interior.png',           category: 'Workshops',     title: 'AI/ML Workshop Session' },
  { id: 3,  src: '/assets/ground level shot.png',  category: 'Competitions',  title: 'Campus Hackathon' },
  { id: 4,  src: '/assets/drone shot.png',         category: 'Celebrations',  title: 'Annual Day 2025' },
  { id: 5,  src: '/assets/interior.png',           category: 'Tech Fest',     title: 'Opening Ceremony' },
  { id: 6,  src: '/assets/ground level shot.png',  category: 'Workshops',     title: 'Cybersecurity Bootcamp' },
  { id: 7,  src: '/assets/drone shot.png',         category: 'Competitions',  title: 'Robotics Challenge' },
  { id: 8,  src: '/assets/interior.png',           category: 'Celebrations',  title: 'Farewell Night 2025' },
  { id: 9,  src: '/assets/ground level shot.png',  category: 'Tech Fest',     title: 'Innovation Expo' },
  { id: 10, src: '/assets/drone shot.png',         category: 'Workshops',     title: 'Cloud Computing Lab' },
  { id: 11, src: '/assets/interior.png',           category: 'Competitions',  title: 'Code Wars – Finals' },
  { id: 12, src: '/assets/ground level shot.png',  category: 'Celebrations',  title: 'Alumni Meet 2024' },
];

const FILTERS = ['All', 'Tech Fest', 'Workshops', 'Competitions', 'Celebrations'];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImg, setLightboxImg]   = useState(null);
  const [lightboxIdx, setLightboxIdx]   = useState(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(img => img.category === activeFilter);

  const openLightbox  = (img, idx) => { setLightboxImg(img); setLightboxIdx(idx); };
  const closeLightbox = () => { setLightboxImg(null); setLightboxIdx(null); };
  const prevImg = (e) => {
    e.stopPropagation();
    const idx = (lightboxIdx - 1 + filtered.length) % filtered.length;
    setLightboxImg(filtered[idx]); setLightboxIdx(idx);
  };
  const nextImg = (e) => {
    e.stopPropagation();
    const idx = (lightboxIdx + 1) % filtered.length;
    setLightboxImg(filtered[idx]); setLightboxIdx(idx);
  };

  return (
    <div className="gallery-page">
      {/* ── Hero Banner ── */}
      <div className="gallery-hero">
        <div className="gallery-hero-bg" style={{ backgroundImage: "url('/assets/drone shot.png')" }} />
        <div className="gallery-hero-overlay" />
        <div className="gallery-hero-content container">
          <span className="gallery-badge">Visual Stories</span>
          <h1 className="gallery-hero-title">Our Gallery</h1>
          <p className="gallery-hero-sub">Browse through moments captured from our events and activities</p>
        </div>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="gallery-filter-bar">
        <div className="container">
          <div className="gallery-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="gallery-body container">
        <div className="gallery-grid">
          {filtered.map((img, idx) => (
            <div key={img.id} className="gallery-item" onClick={() => openLightbox(img, idx)}>
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-category">{img.category}</span>
                <span className="gallery-img-title">{img.title}</span>
                <span className="gallery-zoom">⤢ View</span>
              </div>
            </div>
          ))}
        </div>

        <p className="gallery-footer-note">
          📸 Gallery images will be managed through the admin panel once backend is integrated.
        </p>
      </div>

      {/* ── Lightbox ── */}
      {lightboxImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
          <button className="lightbox-nav prev" onClick={prevImg} aria-label="Previous">&#8249;</button>
          <button className="lightbox-nav next" onClick={nextImg} aria-label="Next">&#8250;</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightboxImg.src} alt={lightboxImg.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <span className="lightbox-cat">{lightboxImg.category}</span>
              <h3>{lightboxImg.title}</h3>
              <span className="lightbox-counter">{lightboxIdx + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
