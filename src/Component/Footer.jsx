import React from 'react';
import '../Css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>Land Goods Delivery & Car Rentals</h3>
          <p>
            Fast and reliable delivery of goods across the country. Rent cars for all
            your personal and business needs.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Car Rentals</li>
            <li>Goods Delivery</li>
            <li>Logistics</li>
            <li>Chauffeur Services</li>
            <li>International Shipping</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: +123 456 7890</li>
            <li>Email: info@landgoods.com</li>
            <li>Address: 123 Delivery St, City, Country</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">Twitter</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Land Goods Delivery & Car Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
