import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Component/Navbar';
import TransportCarousel from './Component/TransportCarousel';
import HeroSection from './Component/Herosection';
import ServicesOverview from './Component/ServiceOverview';
import TrackShipment from './Component/TrackShipment';
import ShippingCalculator from './Component/ShippingCalculater';
import LogisticsServicePage from './Component/LogisticsServicePage';
import PhoneNumberVerification from './Component/PhoneNumberVerification';


export default function App() {
  return (
    <div>
       <Navbar/>
      <HeroSection/>
      {/* <LogisticsServicePage/>
       <ServicesOverview/>
      <TrackShipment/>
      <ShippingCalculator/> 
       <TransportCarousel/> 
      <PhoneNumberVerification/> */}
    </div>
  )
}
