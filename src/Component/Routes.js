import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import ContactUs from './ContactUs';
import AboutUs from "./AboutUs";
import Doctor from "./Doctor"
import FAQ from './FAQ';



const Routers = () => {
  return (
    <div>
<Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
    <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
    <Route path="/doctor" element={<Doctor></Doctor>}></Route>
    <Route path="/faq" element={<FAQ></FAQ>}></Route>
</Routes>
    </div>
  )
}

export default Routers