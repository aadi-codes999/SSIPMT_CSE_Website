import React from 'react';
import { Calendar, Award, Users, ImageIcon } from 'lucide-react';
import './WhatWeOffer.css';

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer-section">
      <div className="container">
        <h2 className="wwo-heading">What We Offer</h2>
        
        <div className="wwo-grid">
          {/* Card 1 */}
          <div className="wwo-card fade-in">
            <div className="wwo-icon-wrapper">
              <Calendar className="wwo-icon" size={32} />
            </div>
            <h3>Events & Competitions</h3>
            <p>Participate in exciting tech events and competitions throughout the year</p>
            <a href="/events" className="wwo-link">Learn More &rarr;</a>
          </div>

          {/* Card 2 */}
          <div className="wwo-card fade-in" style={{ transitionDelay: '0.1s' }}>
            <div className="wwo-icon-wrapper">
              <Award className="wwo-icon" size={32} />
            </div>
            <h3>Certificates</h3>
            <p>Access your participation and winner certificates easily</p>
            <a href="#" className="wwo-link">Learn More &rarr;</a>
          </div>

          {/* Card 3 */}
          <div className="wwo-card fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="wwo-icon-wrapper">
              <Users className="wwo-icon" size={32} />
            </div>
            <h3>Clubs & Communities</h3>
            <p>Join various clubs and connect with like-minded students</p>
            <a href="#" className="wwo-link">Learn More &rarr;</a>
          </div>

          {/* Card 4 */}
          <div className="wwo-card fade-in" style={{ transitionDelay: '0.3s' }}>
            <div className="wwo-icon-wrapper">
              <ImageIcon className="wwo-icon" size={32} />
            </div>
            <h3>Gallery</h3>
            <p>Browse through moments captured from our events and activities</p>
            <a href="/gallery" className="wwo-link">Learn More &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
