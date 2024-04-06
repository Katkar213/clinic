import React from 'react'
import { useParams } from 'react-router-dom'
import "../CSS/department.css"
import {useState,useEffect} from 'react'
import axios from "axios";


const Departments = () => {

  const [data2,setData2]=useState([]);



  useEffect(()=>{
    axios.get("http://localhost:4001/api/getdata").then((res)=>{
      setData2(res.data)
      
    })
    },[])
    console.log(data2)

  const {name}=useParams()
  console.log(typeof(name))
  const data=[{
    name:"Cardiology",
    des:"Cardiology is the branch of medicine that deals with disorders of the heart and circulatory system. Cardiologists diagnose and treat conditions such as coronary artery disease, heart failure, arrhythmias, and congenital heart defects. They use various diagnostic tools such as electrocardiograms (ECG), echocardiograms, and stress tests to evaluate heart health and provide appropriate treatment, which may include medication, lifestyle changes, or surgical interventions.",
    des2:"Our experienced cardiologists specialize in diagnosing and treating heart and circulatory system disorders, helping our patients maintain optimal heart health and well-being."
    
  },
  {
    name:"cardiology1",
    des:"Cardiology is the branch of medicine that deals with disorders of the heart and circulatory system. Cardiologists diagnose and treat conditions such as coronary artery disease, heart failure, arrhythmias, and congenital heart defects. They use various diagnostic tools such as electrocardiograms (ECG), echocardiograms, and stress tests to evaluate heart health and provide appropriate treatment, which may include medication, lifestyle changes, or surgical interventions.",
    des2:"Our experienced cardiologists specialize in diagnosing and treating heart and circulatory system disorders, helping our patients maintain optimal heart health and well-being."
    
  },
  {
    name:"cardiology2",
    des:"Cardiology is the branch of medicine that deals with disorders of the heart and circulatory system. Cardiologists diagnose and treat conditions such as coronary artery disease, heart failure, arrhythmias, and congenital heart defects. They use various diagnostic tools such as electrocardiograms (ECG), echocardiograms, and stress tests to evaluate heart health and provide appropriate treatment, which may include medication, lifestyle changes, or surgical interventions.",
    des2:"Our experienced cardiologists specialize in diagnosing and treating heart and circulatory system disorders, helping our patients maintain optimal heart health and well-being."
    
  },
  {
    name:"cardiology3",
    des:"Cardiology is the branch of medicine that deals with disorders of the heart and circulatory system. Cardiologists diagnose and treat conditions such as coronary artery disease, heart failure, arrhythmias, and congenital heart defects. They use various diagnostic tools such as electrocardiograms (ECG), echocardiograms, and stress tests to evaluate heart health and provide appropriate treatment, which may include medication, lifestyle changes, or surgical interventions.",
    des2:"Our experienced cardiologists specialize in diagnosing and treating heart and circulatory system disorders, helping our patients maintain optimal heart health and well-being."
    
  },
  {
    name:"cardiology4",
    des:"Cardiology is the branch of medicine that deals with disorders of the heart and circulatory system. Cardiologists diagnose and treat conditions such as coronary artery disease, heart failure, arrhythmias, and congenital heart defects. They use various diagnostic tools such as electrocardiograms (ECG), echocardiograms, and stress tests to evaluate heart health and provide appropriate treatment, which may include medication, lifestyle changes, or surgical interventions.",
    des2:"Our experienced cardiologists specialize in diagnosing and treating heart and circulatory system disorders, helping our patients maintain optimal heart health and well-being."
    
  },
  {
    name:"cardiology5",
    des:"Cardiology is the branch of medicine that deals with disorders of the heart and circulatory system. Cardiologists diagnose and treat conditions such as coronary artery disease, heart failure, arrhythmias, and congenital heart defects. They use various diagnostic tools such as electrocardiograms (ECG), echocardiograms, and stress tests to evaluate heart health and provide appropriate treatment, which may include medication, lifestyle changes, or surgical interventions.",
    des2:"Our experienced cardiologists specialize in diagnosing and treating heart and circulatory system disorders, helping our patients maintain optimal heart health and well-being."
    
  }, 
]


  return (
    <div>
      {/* hero-session........... */}
<div className="container-fluid">
  <div className="row">
    <div className="col-lg-12 department-hero-session">
<h1>Cardiology</h1>
    </div>
  </div>
  </div>


{/* hospital-description..... */}
<div className="department-parent">

<h1 className="text-center mb-4 mt-4">Welcome to Om Clinic Hospital</h1>
<p>At Om Clinic Hospital, we are dedicated to providing comprehensive healthcare services with a focus on excellence and compassion. Our state-of-the-art facility is equipped to offer a wide range of medical specialties, ensuring that our patients receive the highest standard of care.</p>

{/* map-session-partricular-departments */}


{data.filter((item)=>item.name===name).map((item,index)=>{
  console.log(item)
  return(
    <div key={index}>
    <h2 className=" departments-heading">{item.name}</h2>
           <p>{item.des}</p>
           <p>{item.des2}</p>
    </div>      
  )
      })}
    </div>


{/* cardiology doctors */}

{/* doctors.................. */}

<div className="container-fluid">
<div className="row">
<div className="col-lg-12 col-md-12 doctors-container" >
  <h1 className="text-center mt-5">Our Experiance Doctors</h1>
  <div className="doctor-card-parent">

{data2.filter((item)=>item.category==="home-doctors").map((item,index)=>{
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

export default Departments

