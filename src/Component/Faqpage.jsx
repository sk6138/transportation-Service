import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Faqs from './Faqs'
import Breadcrumb from './Breadcrumb'

export default function Faqpage() {
  return (
    <div>
      <Navbar/>
      <Breadcrumb/>
      <Faqs/>
      <Footer/>
    </div>
  )
}
