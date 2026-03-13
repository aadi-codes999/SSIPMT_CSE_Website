import React, { useState, useEffect } from 'react';
import './Events.css';

const UpcomingEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const events = [
    {
      id: 1,
      title: 'DevFest 2026',
      date: 'December 12-14, 2026',
      bgImage: "linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.9)), url('/assets/interior.png')",
      description: 'The largest annual developer festival hosting workshops, tech talks, and hackathons.'
    },
    {
      id: 2,
      title: 'AI & Future Tech Symposium',
      date: 'January 25, 2027',
      bgImage: "linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.9)), url('/assets/ground level shot.png')",
      description: 'Join industry experts to discuss the future of AI, Quantum Computing, and beyond.'
    },
    {
      id: 3,
      title: 'HackTheBuild Hackathon',
      date: 'February 10-12, 2027',
      bgImage: "linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.9)), url('/assets/drone shot.png')",
      description: '48-hour continuous coding challenge focusing on sustainable tech solutions.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  return (
    <div className="carousel-container">
      {events.map((event, index) => (
        <div 
          key={event.id}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: event.bgImage }}
        >
          <div className="carousel-content fade-in">
            <div className="event-badge">Upcoming Event</div>
            <h2 className="carousel-title">{event.title}</h2>
            <p className="carousel-date">📅 {event.date}</p>
            <p className="carousel-desc">{event.description}</p>
            <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Register Now</button>
          </div>
        </div>
      ))}
      <div className="carousel-indicators">
        {events.map((_, index) => (
          <button 
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Events = () => {
  const pastEvents = [
    { id: 101, year: '2025', title: 'TechCrunch Symposium', image: '/assets/interior.png' },
    { id: 102, year: '2025', title: 'Cyber Defense Workshop', image: '/assets/ground level shot.png' },
    { id: 103, year: '2024', title: 'Annual CodeFest', image: '/assets/drone shot.png' },
    { id: 104, year: '2024', title: 'Alumni Tech Talk', image: '/assets/interior.png' },
    { id: 105, year: '2023', title: 'Innovation Expo', image: '/assets/ground level shot.png' },
    { id: 106, year: '2023', title: 'Web3 & Blockchain Seminar', image: '/assets/drone shot.png' },
  ];

  // Group by year
  const groupedEvents = pastEvents.reduce((acc, event) => {
    if (!acc[event.year]) acc[event.year] = [];
    acc[event.year].push(event);
    return acc;
  }, {});

  return (
    <div className="events-page">
      <UpcomingEvents />
      
      <div className="container section">
        <div className="section-title fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Past Events</h2>
          <div className="title-underline"></div>
        </div>

        {Object.keys(groupedEvents).sort((a, b) => b - a).map(year => (
          <div key={year} className="year-section fade-in">
            <h3 className="year-heading">{year}</h3>
            <div className="past-events-grid">
              {groupedEvents[year].map(event => (
                <div key={event.id} className="past-event-card">
                  <div className="past-event-image-container">
                    <img src={event.image} alt={event.title} className="past-event-image" />
                    <div className="past-event-overlay">
                      <span className="view-text">View Details</span>
                    </div>
                  </div>
                  <div className="past-event-info">
                    <h4>{event.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
