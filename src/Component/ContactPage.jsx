import React from 'react'
import ContactUs from './ContactUs'
import  Navbar  from './Navbar'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'

export default function ContactPage() {
  return (
    <div>
        <Navbar/>
        <Breadcrumb/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
