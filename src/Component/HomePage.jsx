import React from 'react'
import Navbar from './Navbar';

import HeroSection from './Herosection';

import TrustGrid from './TrustGrid';
import EnhancedDeliveryStatus from './EnhancedDeliveryStatus';
import ContactUs from './ContactUs';

import Footer from './Footer';
import Testimonial from './Testimonial';
import Delivery from './Delivery';


export default function HomePage() {
  return (
    <div>
       <Navbar/>
      <HeroSection/>
      {/* <Service/> */}
      <TrustGrid/>
      <EnhancedDeliveryStatus/>
      {/* <BrandLogos/> */}
      <Testimonial/>
     <ContactUs/>
     <Footer/>
     {/* <OCR/> */}
     {/* <Delivery/> */}
    </div>
  )
}

