import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Component/Navbar';

import HeroSection from './Component/Herosection';



import Service from './Component/Service';

import TrustGrid from './Component/TrustGrid';
import EnhancedDeliveryStatus from './Component/EnhancedDeliveryStatus';
import ContactUs from './Component/ContactUs';

import Footer from './Component/Footer';
import Testimonial from './Component/Testimonial';


export default function App() {
  return (
    <div>
       <Navbar/>
      <HeroSection/>
      <Service/>
      <TrustGrid/>
      <EnhancedDeliveryStatus/>
      {/* <BrandLogos/> */}
      <Testimonial/>
     <ContactUs/>
     <Footer/>
     {/* <OCRComponent/> */}
    </div>
  )
}
