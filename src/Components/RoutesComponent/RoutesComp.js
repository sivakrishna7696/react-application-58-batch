import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AboutUs from '../AboutUs/AboutUs'
import Componentlifecycle from '../componentlifecycle/Componentlifecycle'
import ContactUs from '../ContactUs/ContactUs'
import ListsAndKeys from '../ListsAndKeys'
import Pagination from '../Pagination/Pagination'
import PaginationHooks from '../hooks/PaginationHooks'

function RoutesComp() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<AboutUs />} /> */}
        <Route path="/aboutus" element={<AboutUs />}  />
        <Route path='/contactus' element={<ContactUs />}  />
        <Route path='/listandkeys' element={<ListsAndKeys />} />
        <Route path='/complifecycle' element={<Componentlifecycle />} />
        <Route exact path='/pagination' element={<Pagination />}  />
        <Route exact path='/paginationhooks' element={<PaginationHooks />} />
      </Routes>
    </div>
  )
}

export default RoutesComp