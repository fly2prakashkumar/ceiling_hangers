import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer'; // Import the new Footer component
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <Footer /> {/* Render the new Footer here */}
    </div>
  );
}

export default App;