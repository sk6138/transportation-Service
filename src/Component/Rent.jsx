import React from 'react'
import Navbar from './Navbar'
import PageSwitcher from './PageSwitcher'
import DeliveryBookingGuide from './DeliveryBookingGuide'
import '../Css/Delivery.css'
import Footer from './Footer'

export default function Rent() {
  const start =5;
  const end = 8;

  return (
    <div>
      <Navbar/>
      <PageSwitcher start={start} end={end}/>
      {/* <div className="FAQ">
        <h3>FAQS</h3>
      
      <div className='Guide container'>
      <DeliveryBookingGuide/>
      <DeliveryBookingGuide/>
      <DeliveryBookingGuide/>
      <DeliveryBookingGuide/>
      </div>
      </div> */}
      <Footer/>
    </div>
  )
}
