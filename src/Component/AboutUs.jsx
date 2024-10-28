import React from 'react';
import '../Css/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Discover who we are, what we stand for, and how we strive to serve you better.</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>To provide exceptional service, quality products, and foster meaningful connections with our clients.</p>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>To become a global leader in delivering innovative and sustainable solutions, making a positive impact on the world.</p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Mike Johnson</h3>
            <p>Lead Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
