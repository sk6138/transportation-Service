import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from './Component/homepage';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Delivery from './Component/Delivery';
import Rent from './Component/Rent';

export default function App() {
  return (
   
    <Router>
       <Routes>
        <Route path="/home" element={<HomePage/> } />
        <Route path="/" element={<HomePage/> } />
        <Route path="/Rent" element={<Rent /> } />
        <Route path="/Delivery" element={<Delivery /> } />
      </Routes>
      </Router>
    
    
  )
}
