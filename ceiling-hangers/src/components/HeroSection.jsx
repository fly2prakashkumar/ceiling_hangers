import React from 'react';
import './HeroSection.css'; // Import HeroSection-specific styles
import hangerImage from '../assets/hanger.png'; // Correct path to your image

function HeroSection() {
  const phoneNumber = "6302588530"; // Define the phone number for calls

  return (
    <section className="hero-section" id="home-section"> {/* ADDED ID HERE */}
      <div className="hero-content">
        <h1>
          Premium <span className="highlight-text">Ceiling</span> <br />
          <span className="highlight-text">Cloth Hangers</span> for <br />
          Modern Homes
        </h1>
        <p>
          Transform your laundry experience with our innovative, space-saving
          ceiling cloth hangers. Made with high-quality materials for durability
          and style.
        </p>
        <div className="hero-buttons">
          <a
            href={`tel:+91${phoneNumber}`}
            className="btn primary-btn"
          >
            Call Now for Free Installation
          </a>
          <a
            href="#products-section"
            className="btn secondary-btn"
          >
            View Products
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={hangerImage} alt="Ceiling Cloth Hanger" className="hero-image" />
        <div className="load-capacity">
          <span>15Kg</span>
          <span>load capacity</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;