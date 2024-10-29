import React from 'react'
import Navbar from './Navbar'
import PageSwitcher from './PageSwitcher'
import DeliveryBookingGuide from './DeliveryBookingGuide'
import '../Css/Delivery.css'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'

export default function Delivery() {
  const start=1;
  const end = 4;

  return (
    <div>
      <Navbar/>
      <Breadcrumb/>
      <PageSwitcher start={start} end={end} />
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
