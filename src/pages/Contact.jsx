import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      {/* Header */}
      <div className="contact-header" style={{ backgroundImage: "linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url('/assets/drone shot.png')" }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="contact-title fade-in">Get In Touch</h1>
          <p className="contact-subtitle fade-in" style={{ transitionDelay: '0.2s' }}>
            We'd love to hear from you. Reach out for admissions, collaborations, or inquiries.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '5rem 2rem' }}>
        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <h2 className="section-heading">Contact Information</h2>
            
            <div className="info-card fade-in">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h3>Campus Address</h3>
                <p>SSIPMT Campus, Mujgahan,<br />PO - Sejbahar, Raipur (C.G.)</p>
              </div>
            </div>

            <div className="info-card fade-in" style={{ transitionDelay: '0.1s' }}>
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-content">
                <h3>Phone Number</h3>
                <p>+91 (0771) 212 9119</p>
                <p>+91 975 204 4444</p>
              </div>
            </div>

            <div className="info-card fade-in" style={{ transitionDelay: '0.2s' }}>
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-content">
                <h3>Email Address</h3>
                <p>info@ssipmt.com</p>
                <p>cse.dept@ssipmt.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form Details / Map embedded (Optional) */}
          <div className="contact-form-section fade-in" style={{ transitionDelay: '0.3s' }}>
            <h2 className="section-heading">Send Us a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can we help?" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="map-container fade-in" style={{ transitionDelay: '0.4s' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.285810058999!2d81.65874251493452!3d21.141026085937666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c50deaf758ef%3A0xe54261da24a1b0be!2sShri%20Shankaracharya%20Institute%20of%20Professional%20Management%20and%20Technology%2C%20Raipur!5e0!3m2!1sen!2sin!4v1655184294026!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SSIPMT Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
