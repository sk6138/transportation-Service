import React from 'react'
import { Suspense, lazy } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoadingSpinner from './Component/LoadingSpinner';



// Lazy load components
const HomePage = lazy(() => import('../src/Component/HomePage'));
const Rent = lazy(() => import('../src/Component/Rent'));
const Delivery = lazy(() => import('../src/Component/Delivery'));
const ContactPage = lazy(() => import('../src/Component/ContactPage'));
const Aboutpage = lazy(() => import('../src/Component/Aboutpage'));
const Faqpage = lazy(() => import('../src/Component/Faqpage'));



export default function App() {
  return (
   
    <Router >
      <Suspense fallback={<LoadingSpinner/>}>
      <Routes>
     
        <Route path="/home" element={<HomePage/> } />
        
        <Route path="/" element={<HomePage/> } />
        <Route path="/Rent" element={<Rent /> } />
        <Route path="/Delivery" element={<Delivery /> } />
        <Route path="/contact" element={<ContactPage /> } />
        <Route path="/about" element={<Aboutpage /> } />
        <Route path="/faqs" element={<Faqpage /> } />
      </Routes>
</Suspense>
      
      </Router>
    
    
  )
}
