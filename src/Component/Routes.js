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
import Dashboard from './Dashboard/Dashboard';


const Routers = () => {

  return (
    <div>
    <Routes>

    

      <Route path="/" element={
          <ProtectedRoute>
<Home></Home>
          </ProtectedRoute>
      }></Route>
    <Route path="/aboutus" element={
       <ProtectedRoute>
        <AboutUs></AboutUs>
       </ProtectedRoute>
   }></Route>
    <Route path="/contactus" element={
       <ProtectedRoute>
         <ContactUs></ContactUs>
       </ProtectedRoute>
   }></Route>
    <Route path="/doctor" element={
       <ProtectedRoute>
         <Doctor></Doctor>
       </ProtectedRoute>
   }></Route>
    <Route path="/faq" element={
       <ProtectedRoute><FAQ></FAQ></ProtectedRoute>
    }></Route>
 

 
      <Route path="/login" element={
             <PublicRoute>
              <Login/>
             </PublicRoute>
      }></Route>
      
    <Route path="/register" element={
           <PublicRoute>
            <Register/>
           </PublicRoute>
    }></Route>
      
    <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
    
</Routes>
    

    </div>
  )
}

export default Routers