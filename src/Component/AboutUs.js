import React from 'react'
import "../CSS/about.css"

const AboutUs = () => {
  return (
    <div>
          <div className="about-page">
      <h1>About OM Clinic</h1>
      <p>Welcome to OM Clinic. We are committed to providing high-quality healthcare services in a compassionate and welcoming environment.</p>
      <p>Our team of skilled professionals offers a range of medical services, including general consultations, preventative care, and specialized treatments.</p>
      <p>At OM Clinic, we believe in treating the whole person - mind, body, and spirit. We strive to empower our patients to take control of their health and well-being.</p>
      <p>Thank you for choosing OM Clinic for your healthcare needs. We look forward to serving you.</p>

      <p>Our team of skilled professionals offers a range of medical services, including:</p>
      <ul>
        <li>Primary Care</li>
        <li>Specialized Treatments</li>
        <li>Preventive Care</li>
        <li>Women's Health</li>
        <li>Mental Health Services</li>
        <li>Physical Therapy</li>
      </ul>
      <p>At OM Clinic, we prioritize holistic healing and personalized treatment plans. We believe in fostering a collaborative relationship between patients and healthcare providers.</p>
      <p>Our state-of-the-art facilities are equipped with the latest technology to ensure the highest standard of care for our patients.</p>
      <p>Thank you for choosing OM Clinic for your healthcare needs. We are dedicated to improving the health and well-being of our community.</p>
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

export default AboutUs