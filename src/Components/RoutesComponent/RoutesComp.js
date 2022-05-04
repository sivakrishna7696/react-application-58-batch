import React, { useReducer } from 'react'
import { Routes,Route } from 'react-router-dom'
import AboutUs from '../AboutUs/AboutUs'
import Componentlifecycle from '../componentlifecycle/Componentlifecycle'
import ContactUs from '../ContactUs/ContactUs'
import ListsAndKeys from '../ListsAndKeys'
import Pagination from '../Pagination/Pagination'
import PaginationHooks from '../hooks/PaginationHooks'
import CompA from '../usecontext/CompA'
import UsereducerHook from '../hooks/UsereducerHook'

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
        <Route exact path='/usecontext' element={<CompA />} />
        <Route exact path='/usereducer' element={<UsereducerHook />} />

      </Routes>
    </div>
  )
}

export default RoutesComp