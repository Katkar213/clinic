import React from 'react'
import "../CSS/home.css"
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



		
	

    </div>
  )
}

export default Home