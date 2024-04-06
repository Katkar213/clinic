import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../CSS/contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactUs = () => {




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8f1v8ld', 'template_v8p7k7y', form.current, {
        publicKey: 'VVvh8yQBqSGBDP0-Z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          toast.success("message sent ...!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div>
    <div className="contact-us-page">
    <h1>Contact OM Clinic</h1>
    <div className="contact-info">
      <p>If you have any questions or would like to schedule an appointment, please contact us:</p>
      <p>Phone: 123-456-7890</p>
      <p>Email: info@omclinic.com</p>
      <p>Address: Kranti chowk,Aurangabd,431005</p>
    </div>
    <div className="contact-form">
      <h2>Send us a Message</h2>

      {/* form started.............. */}
      <form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name" />
  <label>Email</label>
  <input type="email" name="user_email" />
  <label>Message</label>
  <textarea name="message" />
  <input type="submit" value="Send" />
</form>

    {/* form ended........................ */}



    </div>
    <div className="map-container">
      {/* Replace the iframe src with your own Google Maps embed code */}
      <iframe
        title="OM Clinic Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.238683683462!2d-122.08232288465108!3d37.386051579831576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbbc1d6d01da7%3A0x5dc0e7f3d50d5c16!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1589654934375!5m2!1sen!2sus"
        width="600"
        height="450"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
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

    <ToastContainer></ToastContainer>
  </div>
  )
}

export default ContactUs