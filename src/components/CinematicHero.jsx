import React, { useEffect, useRef, useState } from 'react';
import './CinematicHero.css';

const CinematicHero = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the container has scrolled relative to the viewport
      // top goes from 0 (when container hits top of viewport) to -(height - viewportHeight)
      
      let progress = 0;
      
      if (top <= 0) {
        // total scrollable distance within the container
        const maxScroll = height - viewportHeight;
        progress = Math.min(1, Math.max(0, -top / maxScroll));
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacities and scales based on progress
  // Image 1: 0 to 0.4 (fades out from 0.3 to 0.4)
  // Image 2: 0.3 to 0.7 (fades in 0.3-0.4, fades out 0.6-0.7)
  // Image 3: 0.6 to 1.0 (fades in 0.6-0.7)

  // Opacity helpers
  const getOpacity1 = (p) => p < 0.3 ? 1 : p < 0.4 ? 1 - ((p - 0.3) * 10) : 0;
  const getOpacity2 = (p) => p < 0.3 ? 0 : p < 0.4 ? ((p - 0.3) * 10) : p < 0.6 ? 1 : p < 0.7 ? 1 - ((p - 0.6) * 10) : 0;
  const getOpacity3 = (p) => p < 0.6 ? 0 : p < 0.7 ? ((p - 0.6) * 10) : 1;

  // Scale helpers for Ken Burns (scales from 1 to 1.15 smoothly over its active range)
  const getScale1 = (p) => 1 + (Math.min(p, 0.4) * 0.375); // scales up as we scroll
  const getScale2 = (p) => 1 + (Math.max(0, Math.min(p - 0.3, 0.4)) * 0.375); 
  const getScale3 = (p) => 1 + (Math.max(0, p - 0.6) * 0.375);

  const images = [
    { src: '/assets/drone shot.png', opacity: getOpacity1(scrollProgress), scale: getScale1(scrollProgress) },
    { src: '/assets/ground level shot.png', opacity: getOpacity2(scrollProgress), scale: getScale2(scrollProgress) },
    { src: '/assets/interior.png', opacity: getOpacity3(scrollProgress), scale: getScale3(scrollProgress) }
  ];

  return (
    <div className="hero-scroll-container" ref={containerRef}>
      <div className="hero-sticky-element">
        
        {images.map((img, index) => (
          <div 
            key={index}
            className="hero-image-layer"
            style={{ 
              opacity: img.opacity,
              visibility: img.opacity > 0 ? 'visible' : 'hidden',
              zIndex: images.length - index
            }}
          >
            <div 
              className="hero-image-inner"
              style={{
                backgroundImage: `url('${img.src}')`,
                transform: `scale(${img.scale})`
              }}
            />
            {/* Dark overlay for text contrast */}
            <div className="hero-overlay"></div>
          </div>
        ))}

        {/* Text Layer - Fades out as we scroll to the second image */}
        <div 
          className="hero-content"
          style={{
            opacity: getOpacity1(scrollProgress),
            transform: `translate(-50%, calc(-50% + ${scrollProgress * 150}px))`,
            zIndex: 10
          }}
        >
          <div className="department-badge">Department of Computer Science & Engineering</div>
          <h1 className="hero-title">Shaping the Future of <br/> <span style={{color: 'var(--color-gold)'}}>Technology</span></h1>
          <p className="hero-subtitle">Experience education that empowers innovation, research, and technical excellence at SSIPMT.</p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator" style={{ opacity: getOpacity1(scrollProgress), zIndex: 10 }}>
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
        
      </div>
    </div>
  );
};

export default CinematicHero;
