import React from 'react'
import {BrowserRouter,NavLink} from "react-router-dom"
import Routers from './Routes'
import "../App.css"
import logoImage from "../images/logo.png"

const Navbar = () => {
  return (
    <div>
<BrowserRouter>
<div className="container-fluid">

<div className="row navbar">
  <div className="col-12 navbar-parent">
  <div className="col-lg-1 logo">
    <img src={logoImage} alt="not-found"/>
  </div>
  <div className="col-lg-9 navlink-container">
<NavLink to="/" className={({isActive})=>(isActive?"active":"")}  id="navlink">Home</NavLink>
<NavLink to="/doctor" id="navlink">Doctors</NavLink>
<NavLink to="/aboutus" id="navlink">About Us</NavLink>
<NavLink  to="/contactus" id="navlink">Contact Us</NavLink>
<NavLink  to="/faq" id="navlink">FAQ</NavLink>
</div>
</div>

</div>
</div>






<Routers></Routers>
</BrowserRouter>







    </div>
  )
}

export default Navbar