import React from 'react';
import './Footer.css'; // Import styles for this component

function Footer() {
  return (
    <footer className="footer-section" id="contact-section"> {/* ADDED ID HERE */}
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-nd">ND</span>
            <span className="logo-text">Ceiling Hangers</span>
          </div>
          <p className="brand-tagline">Innovative Drying Solutions for Modern Homes</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> {/* Font Awesome icon for location */}
            Near GR function hall, 3rd Road, 2nd cross, <br />
            Anantapur-515001
          </p>
          <p>
            <i className="fas fa-phone"></i> {/* Font Awesome icon for phone */}
            <a href="tel:+916302588530">+91 6302588530</a>
          </p>
          <p>
            <i className="fas fa-envelope"></i> {/* Font Awesome icon for email */}
            <a href="mailto:ndceilinghangers@gmail.com">ndceilinghangers@gmail.com</a>
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home-section">Home</a></li> {/* UPDATED HREF */}
            <li><a href="#about-section">About Us</a></li> {/* UPDATED HREF */}
            <li><a href="#products-section">Our Products</a></li> {/* UPDATED HREF */}
            <li><a href="#contact-section">Contact Us</a></li> {/* UPDATED HREF */}
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome icon for Facebook */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> {/* Font Awesome icon for Instagram */}
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> {/* Font Awesome icon for WhatsApp */}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Neelamani Durga Home Needs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;