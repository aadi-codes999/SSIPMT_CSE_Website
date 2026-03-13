import React, { useEffect, useState } from 'react';
import './About.css';

const StatCounter = ({ end, label, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const duration = 2000; // 2 seconds

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <div className="stat-card fade-in">
      <div className="stat-number">{prefix}{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const About = () => {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header" style={{ backgroundImage: "linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url('/assets/interior.png')" }}>
        <div className="container">
          <h1 className="page-title fade-in">About Us</h1>
          <p className="page-subtitle fade-in" style={{ transitionDelay: '0.2s' }}>
            Empowering the next generation of computing professionals.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '5rem 2rem' }}>
        {/* Mission & Vision */}
        <div className="mission-vision-grid">
          <div className="mv-card fade-in">
            <div className="mv-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>
              To impart quality education and promote research in Computer Science & Engineering. 
              We strive to equip our students with strong foundational concepts, advanced technical skills, 
              and a mindset for lifelong learning to tackle global challenges effectively.
            </p>
          </div>
          
          <div className="mv-card fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="mv-icon">👁️</div>
            <h2>Our Vision</h2>
            <p>
              To be recognized as a center of excellence for education, research, and innovation 
              in Computer Science & Engineering, producing ethically strong and technically proficient 
              graduates capable of leading the technological advancements of tomorrow.
            </p>
          </div>
        </div>

        {/* Community Section */}
        <div className="community-section fade-in">
          <div className="community-content">
            <div className="community-icon">🤝</div>
            <h2>Our Community</h2>
            <p>
              The CSE department at SSIPMT is more than just a place of learning; it's a thriving ecosystem 
              of innovators, thinkers, and builders. Our community fosters collaboration through active tech clubs, 
              mentorship programs, and regular industry interactions. We believe that true growth happens when 
              students support each other and work together towards common goals.
            </p>
          </div>
        </div>

        {/* Achievements / Stats Section */}
        <div className="section-title fade-in" style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
          <h2>Our Achievements</h2>
          <div className="title-underline"></div>
        </div>

        <div className="stats-grid">
          <StatCounter end={2500} suffix="+" label="Alumni Worldwide" />
          <StatCounter end={98} suffix="%" label="Placement Rate" />
          <StatCounter end={50} suffix="+" label="Industry Partners" />
          <StatCounter end={120} suffix="+" label="Research Papers" />
        </div>
      </div>
    </div>
  );
};

export default About;
