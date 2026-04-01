import React, { useState, useEffect } from 'react';
import './Events.css';

/* ── Upcoming Events Carousel ── */
const UPCOMING = [
  {
    id: 1,
    title: 'DevFest 2026',
    date: 'December 12–14, 2026',
    location: 'SSIPMT Main Auditorium',
    tag: 'Annual Festival',
    description: 'The largest annual developer festival — hosting workshops, tech talks, and a 36-hour hackathon open to all branches.',
    bg: "url('/assets/interior.png')",
  },
  {
    id: 2,
    title: 'AI & Future Tech Symposium',
    date: 'January 25, 2027',
    location: 'Seminar Hall, Block B',
    tag: 'Academic Symposium',
    description: 'Join industry experts and researchers to discuss the future of AI, Quantum Computing, and ethical technology.',
    bg: "url('/assets/ground level shot.png')",
  },
  {
    id: 3,
    title: 'HackTheBuild Hackathon',
    date: 'February 8–10, 2027',
    location: 'CSE Lab Complex',
    tag: 'Hackathon',
    description: 'A 48-hour intensive coding marathon focusing on sustainable tech solutions — cash prizes up to ₹1,50,000.',
    bg: "url('/assets/drone shot.png')",
  },
];

const PAST_EVENTS = [
  { id: 101, year: '2025', title: 'TechCrunch Symposium',       category: 'Symposium',   img: '/assets/interior.png',          desc: 'Industry leaders shared insights on startup culture and product development.' },
  { id: 102, year: '2025', title: 'Cyber Defense Workshop',     category: 'Workshop',    img: '/assets/ground level shot.png', desc: 'Hands‑on ethical hacking and network security training for students.' },
  { id: 103, year: '2024', title: 'Annual CodeFest',            category: 'Competition', img: '/assets/drone shot.png',        desc: 'Inter-college coding competition with 600+ participants across 12 colleges.' },
  { id: 104, year: '2024', title: 'Alumni Tech Talk',           category: 'Talk',        img: '/assets/interior.png',          desc: 'Distinguished alumni from FAANG companies mentored final-year students.' },
  { id: 105, year: '2023', title: 'Innovation Expo',            category: 'Exhibition',  img: '/assets/ground level shot.png', desc: 'Student projects ranging from AI models to IoT prototypes were showcased.' },
  { id: 106, year: '2023', title: 'Web3 & Blockchain Seminar',  category: 'Seminar',     img: '/assets/drone shot.png',        desc: 'Deep dive into decentralized applications, NFTs, and smart contracts.' },
];

const CAT_COLORS = {
  Symposium:   '#6366f1',
  Workshop:    '#0ea5e9',
  Competition: '#f59e0b',
  Talk:        '#10b981',
  Exhibition:  '#ec4899',
  Seminar:     '#8b5cf6',
};

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent(p => (p + 1) % UPCOMING.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => setCurrent(p => (p - 1 + UPCOMING.length) % UPCOMING.length);
  const next = () => setCurrent(p => (p + 1) % UPCOMING.length);

  const ev = UPCOMING[current];

  return (
    <div
      className="events-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {UPCOMING.map((e, i) => (
        <div
          key={e.id}
          className={`carousel-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(10,25,47,0.55),rgba(10,25,47,0.88)),${e.bg}` }}
        />
      ))}

      <div className="carousel-content">
        <span className="event-badge">{ev.tag}</span>
        <h2 className="carousel-title">{ev.title}</h2>
        <div className="carousel-meta">
          <span>📅 {ev.date}</span>
          <span>📍 {ev.location}</span>
        </div>
        <p className="carousel-desc">{ev.description}</p>
        <div className="carousel-actions">
          <button className="btn btn-gold">Register Now →</button>
          <button className="btn btn-ghost">Learn More</button>
        </div>
      </div>

      <button className="car-nav prev" onClick={prev} aria-label="Previous">&#8249;</button>
      <button className="car-nav next" onClick={next} aria-label="Next">&#8250;</button>

      <div className="carousel-indicators">
        {UPCOMING.map((_, i) => (
          <button
            key={i}
            className={`indicator ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-progress">
        <div
          className="carousel-progress-bar"
          style={{ animationDuration: '5.5s', animationPlayState: paused ? 'paused' : 'running' }}
          key={`${current}-${paused}`}
        />
      </div>
    </div>
  );
};

/* ── Past Events grouped by year ── */
const PastEvents = () => {
  const grouped = PAST_EVENTS.reduce((acc, ev) => {
    (acc[ev.year] = acc[ev.year] || []).push(ev);
    return acc;
  }, {});

  return (
    <>
      {Object.keys(grouped).sort((a, b) => b - a).map(year => (
        <div key={year} className="year-block fade-in">
          <div className="year-pill">{year}</div>
          <div className="past-events-grid">
            {grouped[year].map(ev => (
              <div key={ev.id} className="past-event-card">
                <div className="pec-img-wrap">
                  <img src={ev.img} alt={ev.title} loading="lazy" />
                  <div className="pec-overlay" />
                  <span
                    className="pec-cat"
                    style={{ background: CAT_COLORS[ev.category] || 'var(--color-gold)' }}
                  >
                    {ev.category}
                  </span>
                </div>
                <div className="pec-body">
                  <h4>{ev.title}</h4>
                  <p>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

/* ── Page ── */
const Events = () => (
  <div className="events-page">
    {/* Carousel hero */}
    <Carousel />

    {/* Past events */}
    <div className="container section">
      <div className="section-title-wrap fade-in">
        <span className="ev-label">Archive</span>
        <h2>Past Events</h2>
        <div className="title-underline" />
      </div>
      <PastEvents />
    </div>
  </div>
);

export default Events;
