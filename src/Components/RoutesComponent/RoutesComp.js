import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AboutUs from '../AboutUs/AboutUs'
import ContactUs from '../ContactUs/ContactUs'

function RoutesComp() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<AboutUs />} /> */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default RoutesComp