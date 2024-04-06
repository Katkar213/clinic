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
import Departments from './Departments';
import ApplyDoctor from "../Component/ApplyDoctor";
import Profile from './Dashboard/Profile';
import Notification from './Notification';
import Read from './Notification/Read';
import UnRead from './Notification/UnRead';
import Users from './Admin/Users';
import Doctors from './Admin/Doctors';
import Appointments from './Dashboard/Appointments';


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
 
 <Route path="/profile" element={<Profile></Profile>}></Route>

 
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

            <Route path="/apply-doctor" element={<ApplyDoctor></ApplyDoctor>}/>
        
      
    <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
    <Route path="/departments/:name" element={<Departments></Departments>}/>
    
<Route path="/read" element={<Read></Read>}/>
<Route path="/unread" element={<UnRead></UnRead>}></Route>


    <Route path="/notification" element={<Notification></Notification>}/>
    <Route path="/user" element={<Users></Users>}></Route>
<Route path="/doctors" element={<Doctors></Doctors>}></Route>
<Route path="/appointments" element={<Appointments></Appointments>}></Route>




</Routes>

    

    </div>
  )
}

export default Routers