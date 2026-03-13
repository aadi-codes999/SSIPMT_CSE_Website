import React from 'react';
import './NoticeBoard.css';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: 'Registration Open: Tech Fest 2025',
      date: 'March 15, 2025',
    },
    {
      id: 2,
      title: 'Workshop: Machine Learning Basics',
      date: 'March 10, 2025',
    }
  ];

  const upcomingEvents = [
    {
      id: 101,
      day: '25',
      month: 'Mar',
      title: 'Coding Competition 2025',
      link: '#'
    }
  ];

  return (
    <section className="notices-events-section">
      <div className="container">
        <div className="ne-grid">
          
          {/* Notices Column */}
          <div className="ne-card fade-in">
            <div className="ne-header">
              <h2>Notices</h2>
              <a href="#" className="view-all-link">View All</a>
            </div>
            
            <div className="ne-list">
              {notices.map((notice) => (
                <div key={notice.id} className="notice-item line-left">
                  <h4 className="notice-item-title">{notice.title}</h4>
                  <p className="notice-item-date">Posted on {notice.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events Column */}
          <div className="ne-card fade-in" style={{ transitionDelay: '0.1s' }}>
            <div className="ne-header">
              <h2>Upcoming Events</h2>
              <a href="/events" className="view-all-link">View All</a>
            </div>
            
            <div className="ne-list">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-calendar-box">
                    <span className="event-day">{event.day}</span>
                    <span className="event-month">{event.month}</span>
                  </div>
                  <div className="event-details">
                    <h4 className="notice-item-title">{event.title}</h4>
                    <a href={event.link} className="view-details-link">View details</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
