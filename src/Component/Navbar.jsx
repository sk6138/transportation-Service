import React from 'react';
import '../Css/Navbar.css';


function Navbar() {
  return (
    <div className="container-center">
      <nav className="navbar navbar-expand-md navbar-light py-3 mb-4">
        <div className="container-fluid">
          {/* Brand/Logo */}
          <a href="/" className="navbar-brand">
            {/* <img src="image/home.png" alt="" style={{ width: '25px' }} /> */}
            
          </a>

          {/* Hamburger icon */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Centered links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#" className="nav-link ">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Track 
                </a>
              </li>
            </ul>

            {/* Right aligned buttons */}
            <div className="d-flex">
              <button type="button" className="btn-login me-2">
                Login
              </button>
              <button type="button" className="btn-login">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
