import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import ContactUs from './ContactUs';
import AboutUs from "./AboutUs";
import Doctor from "./Doctor"
import FAQ from './FAQ';
import Login from '../user-credential/Login';
import Register from "../user-credential/Register";
import ProtectedRoute from './Routes-protection/ProtectedRoute';
import PublicRoute from './Routes-protection/PublicRoute';


const Routers = () => {

  return (
    <div>
    <Routes>

      <ProtectedRoute>
        
      <Route path="/" element={<Home></Home>}></Route>
    <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
    <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
    <Route path="/doctor" element={<Doctor></Doctor>}></Route>
    <Route path="/faq" element={<FAQ></FAQ>}></Route>
      </ProtectedRoute>

      <PublicRoute>
      <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
      </PublicRoute>
    
    
</Routes>
    

    </div>
  )
}

export default Routers