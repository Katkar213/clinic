// import React,{useState,useEffect} from 'react'
// import {BrowserRouter,NavLink} from "react-router-dom"
// import Routers from './Routes'
import "../App.css"
import "../CSS/home.css"
// import logoImage from "../images/logo.png";

// const Navbar = () => {

//   const [Token,setToken]=useState(false);

// const userToken=localStorage.getItem("token");
// useEffect(()=>{
//   if(userToken){
//     setToken(!Token)
//   }

// },[userToken,Token])

//   return (
//     <div>
// <BrowserRouter>
// <div className="container-fluid">

// <div className="row navbar">
//   <div className="col-12 navbar-parent">
//   <div className="col-lg-1 logo">
//     <img src={logoImage} alt="not-found"/>
//   </div>
//   <div className="col-lg-9 navlink-container">
// <NavLink to="/" className={({isActive})=>(isActive?"active":"")}  id="navlink">Home</NavLink>
// <NavLink to="/doctor" id="navlink" className={({isActive})=>(isActive?"active":"")}>Doctors</NavLink>
// <NavLink to="/aboutus" id="navlink" className={({isActive})=>(isActive?"active":"")}>About Us</NavLink>
// <NavLink  to="/contactus" id="navlink" className={({isActive})=>(isActive?"active":"")}>Contact Us</NavLink>
// <NavLink  to="/faq" id="navlink">FAQ</NavLink>

// {/* <NavLink to="/register">Register</NavLink> */}
// </div>
// {Token?<div><NavLink to="/dashboard">Dashboard</NavLink></div>:<div className="login-button-div" ><button className="login-button"> <NavLink to="/login"><button className="login-button">Login</button></NavLink></button>

// </div>}

// </div>

// </div>
// </div>






// <Routers></Routers>
// </BrowserRouter>







//     </div>
//   )
// }

// export default Navbar


import React, { useState, useEffect } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Routers from './Routes';
import '../App.css';
import logoImage from '../images/logo.png';

const Navbar = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    setToken(!!userToken);
    
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row navbar">
            <div className="col-12 navbar-parent">
              <div className="col-lg-1 logo">
                <img src={logoImage} alt="not-found" />
              </div>
              <div className="col-lg-9 navlink-container">
                <NavLink to="/" id="navlink" activeClassName="active">
                  Home
                </NavLink>
                <NavLink to="/doctor" id="navlink" activeClassName="active">
                  Doctors
                </NavLink>
                <NavLink to="/aboutus" id="navlink" activeClassName="active">
                  About Us
                </NavLink>
                <NavLink to="/contactus" id="navlink" activeClassName="active">
                  Contact Us
                </NavLink>
                <NavLink to="/faq" id="navlink" activeClassName="active">
                  FAQ
                </NavLink>
              </div>
              {token ? (
                <h2>
                   <NavLink to="/dashboard" id="navlink" className="dashboard-link" activeClassName="active">
                  Dashboard
                </NavLink>
                </h2>
               
              ) : (
                <NavLink to="/login" id="navlink" activeClassName="active">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <Routers />
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
