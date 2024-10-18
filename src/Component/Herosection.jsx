import React from 'react';
import '../Css/HeroSection.css'; // Import CSS for styling

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Full-width background image */}
      <div className="hero-bg">
        {/* Overlay for better readability */}
        <div className="hero-overlay">
          {/* Headline and CTA */}
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in">Fast and Reliable Cargo Transportation Solutions</h1>
            <p className="hero-subtitle animate-slide-up">Delivering goods across the country, safely and on time</p>
            <a href="#contact" className="hero-cta animate-pulse">Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
