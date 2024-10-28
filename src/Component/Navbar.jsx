// import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

function Navbar() {
  return (
    <div className="container-center">
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="https://i.postimg.cc/P5r3xncY/home.png" alt="home icon" width="30" height="30" />
          </Link>

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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link link-secondary fw-bold me-2">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle text-secondary fw-bold"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/delivery" className="dropdown-item fw-semibold">Deliver Item</Link></li>
                  <li><Link to="/rent" className="dropdown-item fw-semibold">Rent Vehicle</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link fw-bold">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/faqs" className="nav-link fw-bold">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link fw-bold">About</Link>
              </li>
            </ul>
            <div className="d-flex login">
              <Link to="/login" className="btn btn-login me-2">Login</Link>
              <Link to="/signup" className="btn btn-login">Sign-up</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
