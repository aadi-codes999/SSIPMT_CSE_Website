import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';
import './Contact.css';

const INFO_ITEMS = [
  {
    icon: <MapPin size={22} />,
    label: 'Campus Address',
    lines: ['SSIPMT Campus, Mujgahan,', 'PO – Sejbahar, Raipur (C.G.) 492015'],
  },
  {
    icon: <Phone size={22} />,
    label: 'Phone Numbers',
    lines: ['+91 (0771) 212 9119', '+91 975 204 4444'],
  },
  {
    icon: <Mail size={22} />,
    label: 'Email Addresses',
    lines: ['info@ssipmt.com', 'cse.dept@ssipmt.com'],
  },
  {
    icon: <Clock size={22} />,
    label: 'Office Hours',
    lines: ['Mon – Fri: 9:00 AM – 5:00 PM', 'Sat: 9:00 AM – 1:00 PM'],
  },
  {
    icon: <Globe size={22} />,
    label: 'Website',
    lines: ['www.ssipmt.com'],
  },
];

const Contact = () => {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' });
  const [sent,    setSent]    = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.id]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1400);
  };

  return (
    <div className="contact-page">
      {/* ── Hero ── */}
      <div
        className="contact-hero"
        style={{ backgroundImage: "linear-gradient(rgba(10,25,47,0.7),rgba(10,25,47,0.92)),url('/assets/drone shot.png')" }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="contact-badge">We'd love to hear from you</span>
          <h1 className="contact-hero-title fade-in">Get In Touch</h1>
          <p className="contact-hero-sub fade-in" style={{ transitionDelay: '0.2s' }}>
            Reach out for admissions, collaborations, or any inquiries about our department.
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="contact-body container">
        <div className="contact-grid">
          {/* Left – Info */}
          <aside className="contact-info">
            <h2 className="contact-section-heading">Contact Information</h2>

            <div className="info-cards">
              {INFO_ITEMS.map(item => (
                <div className="info-card fade-in" key={item.label}>
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-text">
                    <strong>{item.label}</strong>
                    {item.lines.map(l => <span key={l}>{l}</span>)}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="contact-social">
              <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="#" className="social-btn" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-btn" aria-label="Instagram">IG</a>
              <a href="#" className="social-btn" aria-label="YouTube">▶</a>
            </div>
          </aside>

          {/* Right – Form */}
          <div className="contact-form-section fade-in" style={{ transitionDelay: '0.25s' }}>
            <h2 className="contact-section-heading">Send Us a Message</h2>

            {sent ? (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn-reset" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text" id="name" placeholder="Aaditya Kumar"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email" id="email" placeholder="aaditya@example.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text" id="subject" placeholder="How can we help you?"
                    value={form.subject} onChange={handleChange} required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" rows={6} placeholder="Write your message here…"
                    value={form.message} onChange={handleChange} required
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={sending}>
                  {sending ? (
                    <span className="spinner" />
                  ) : (
                    <>Send Message <Send size={17} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Map ── */}
        <div className="map-container fade-in">
          <div className="map-header">
            <MapPin size={18} /> <span>Find Us on the Map</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.285810058999!2d81.65874251493452!3d21.141026085937666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c50deaf758ef%3A0xe54261da24a1b0be!2sShri%20Shankaracharya%20Institute%20of%20Professional%20Management%20and%20Technology%2C%20Raipur!5e0!3m2!1sen!2sin!4v1655184294026!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SSIPMT Location Map"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
