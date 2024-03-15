import React from 'react'
import "../CSS/home.css"
// import "../CSS/common.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navi=useNavigate();

 let departments=[{
  icon: <i className="fa fa-heartbeat text-primary fs-4"></i>,
  title: "Cardiology",
  des: "Cardiology departments typically focus on the diagnosis and treatment of heart-related conditions. They employ specialized cardiologists and medical professionals who specialize in cardiovascular health. "
},
{
  icon: <i className="fa fa-brain text-primary fs-4"></i>,
  title: "Neurology",
  des: "Neurology departments focus on the diagnosis and treatment of neurological disorders, including conditions affecting the brain, spinal cord, and peripheral nerves."
},
{
  icon: <i className="fa fa-x-ray text-primary fs-4"></i>,
  title: "Pulmonary",
  des: "Pulmonary departments specialize in respiratory health, addressing conditions like asthma, chronic obstructive pulmonary disease (COPD), and lung infections. "
},
{
  icon: <i className="fa fa-wheelchair text-primary fs-4"></i>,
  title: "Orthopedics",
  des: "Orthopedic departments focus on musculoskeletal health, treating conditions related to bones, joints, ligaments, and muscles."
},
{
  icon:<i className="fa fa-tooth text-primary fs-4"></i>,
  title: "Dental Surgery",
  des: "Dental Surgery departments offer a range of oral and maxillofacial surgical procedures. "
},
{
  icon: <i className="fa fa-vials text-primary fs-4"></i>,
  title: "Laboratory",
  des: "Laboratory departments play a crucial role in healthcare, conducting diagnostic tests and analyses to aid in the detection and monitoring of various medical conditions. "
}]

let doctors=[{
  image:"../images/team-1.jpg",
  Name:"Jhon Deo"
},{
  image:"../images/team-1.jpg",
  Name:"Jhon Deo"
},{
  image:"../images/team-1.jpg",
  Name:"Jhon Deo"
},{
  image:"../images/team-1.jpg",
  Name:"Jhon Deo"
}]
  return (
    <div>
      {/* frontpage-image */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12  background-image">
            <div className="image-text">
            <h1>We Are Having Best Doctors And We Provide Top Facility To You !</h1>
            <div className="appointment-btn">
            <button className="btn btn1">Book An Appointment</button>
            <button className="btn btn2" onClick={()=>navi("/contactus")}>Contact Us</button>
            </div>
            
            </div>
     
          </div>
        </div>
    </div>
{/* why you trust us */}

<div className="parent">
<div className="why-us-parent container-fluid">
  <div className="row">
    <div className="col-lg-6">
      <div className="why-us-left">
     
      </div>
    </div>

    <div className="col-lg-6">
      <div className="why-us-right">
        <h2>Why You Should Trust Us? Get Know About Us!</h2>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <ul>
          <li><i className="far fa-check-circle text-primary me-3"></i>Quality health care</li>
          <li><i className="far fa-check-circle text-primary me-3"></i>Only qualified doctors</li>
          <li><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</li>
        </ul>
        <div className="read-more-btn-div"><button className="read-more-btn">Read More</button></div>
      
      </div>
    </div>
  </div>
</div>


<div classsName="container-fluid">
<div className="row">
<h1 className="mt-5 text-center">Health Care Solutions</h1>
<div className="col-lg-12 cards-parent">
{departments.map((item,index)=>{
  return(
    <div className="cards" key={index}>
      <div className="icon">{item.icon}</div>
  
     <h4>{item.title}</h4>
     <p className="cards-des">{item.des}</p>
    
    </div>
  )
})}
  </div>
  </div>
</div>
</div>

{/* doctors.................. */}

<div className="container-fluid">
<div className="row">
<div className="col-lg-12 col-md-12 doctors-container" >
  <h1 className="text-center mt-5">Our Experiance Doctors</h1>
  <div className="doctor-card-parent">

{doctors.map((item,index)=>{
  return(
    <div key={index} className="doctor-card">
      <div className={`doctor-image-${index+1} doctor-image`}>
     
    </div>
   { console.log(index)}
   <div className="doctor-text-div">
    <h5 className="text-center">{item.Name}</h5>
    <p className="text-center">position</p>
    </div>
    </div>
  )
})}
  </div>
  </div>
  </div>
</div>


<div className="contact-parent container-fluid">
<div className="row contact-container">
  <div className="col-lg-6">
    <h1>Make An Appointment To Visit Our Doctor</h1>
    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
    <div className="call-us-now"><h5 className="text-center">Call Us Now</h5>
    <p className="text-center">+2408788586888r</p></div>
  </div>
  <div className="col-lg-6"></div>
</div>
</div>



    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Address</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social rounded-circle" href="./About.js./About.js"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" href="./About.js./About.js"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" href="./About.js./About.js"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" href="./About.js./About.js"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                 
                    <h5 className="text-light mb-4">Services</h5>
                    <a className="btn btn-link" href="./About.js">Cardiology</a>
                    <a className="btn btn-link" href="./About.js">Pulmonary</a>
                    <a className="btn btn-link" href="./About.js">Neurology</a>
                    <a className="btn btn-link" href="./About.js">Orthopedics</a>
                    <a className="btn btn-link" href="./About.js">Laboratory</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Quick Links</h5>
                    <a className="btn btn-link" href="./About.js">About Us</a>
                    <a className="btn btn-link" href="./About.js">Contact Us</a>
                    <a className="btn btn-link" href="./About.js">Our Services</a>
                    <a className="btn btn-link" href="./About.js">Terms & Condition</a>
                    <a className="btn btn-link" href="./About.js">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Newsletter</h5>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" >
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="./About.js">OM Clinic</a>, All Right Reserved.
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}

    </div>
  )
}

export default Home