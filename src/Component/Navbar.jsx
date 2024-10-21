import React from 'react';
import '../Css/Navbar.css';


function Navbar() {
  return (
    <div className="container-center">
    
    
        <nav className="navbar navbar-expand-md navbar-light  py-3 mb-4">
            <div className="container-fluid">
                
                <a href="/" className="navbar-brand">
                    <img src="https://i.postimg.cc/P5r3xncY/home.png" alt="" />
                </a>

               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <div className="collapse navbar-collapse" id="navbarNav">
                   
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#" className="nav-link link-secondary fw-bolder me-2">Home</a>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <a className="btn fw-bolder text-secondary dropdown-toggle py-2 pe-0 px-0" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>

                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fw-semibold" href="#">Deliver item</a></li>
                                    <li><a className="dropdown-item fw-semibold" href="#">Rent vechile</a></li>

                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link fw-bolder">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link fw-bolder">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link fw-bolder">About</a>
                        </li>
                    </ul>

                  
                    <div className="d-flex">
                        <button type="button" className="btn-login  me-2">Login</button>
                        <button type="button" className="btn-login">Sign-up</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>

  );
}

export default Navbar;
