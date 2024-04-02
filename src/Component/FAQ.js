import React from 'react'
import "../CSS/faq.css"

const FAQ = () => {
  return (
    <div>

<div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h2>1. What are your clinic's operating hours?</h2>
        <p>Our clinic is open Monday to Friday from 9:00 AM to 5:00 PM.</p>
      </div>
      <div className="faq-item">
        <h2>2. How can I schedule an appointment?</h2>
        <p>You can schedule an appointment by calling our office at 123-456-7890 or by using our online appointment booking system on our website.</p>
      </div>
      <div className="faq-item">
        <h2>3. Do you accept walk-in patients?</h2>
        <p>Yes, we accept walk-in patients. However, we recommend scheduling an appointment to minimize wait times.</p>
      </div>
      <div className="faq-item">
        <h2>4. What types of insurance do you accept?</h2>
        <p>We accept most major insurance plans. Please contact our office to verify if your insurance is accepted.</p>
      </div>
      <div className="faq-item">
        <h2>5. Can I request prescription refills online?</h2>
        <p>Yes, you can request prescription refills through our patient portal on our website.</p>
      </div>
      <div className="faq-item">
        <h2>6. Do you offer telemedicine appointments?</h2>
        <p>Yes, we offer telemedicine appointments for certain types of visits. Please contact our office to inquire about telemedicine availability.</p>
      </div>
      <div className="faq-item">
        <h2>7. What should I bring to my appointment?</h2>
        <p>Please bring your insurance card, photo ID, and any relevant medical records or test results to your appointment.</p>
      </div>
      <div className="faq-item">
        <h2>8. How can I access my medical records?</h2>
        <p>You can access your medical records through our patient portal on our website. If you need assistance, please contact our office.</p>
      </div>
      <div className="faq-item">
        <h2>9. Do you offer pediatric services?</h2>
        <p>Yes, we offer pediatric services for children of all ages.</p>
      </div>
      <div className="faq-item">
        <h2>10. Is parking available at your clinic?</h2>
        <p>Yes, we have onsite parking available for patients.</p>
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

export default FAQ