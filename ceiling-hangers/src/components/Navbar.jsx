import React from 'react';
import './Navbar.css'; // Import Navbar-specific styles

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-nd">ND</span>
        <span className="logo-text">Ceiling Hangers</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home-section">Home</a></li> {/* UPDATED HREF */}
          <li><a href="#about-section">About Us</a></li> {/* UPDATED HREF */}
          <li><a href="#products-section">Our Products</a></li> {/* UPDATED HREF */}
          <li><a href="#contact-section">Contact Us</a></li> {/* UPDATED HREF */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;