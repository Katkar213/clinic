import React, { useState } from 'react';
import "../CSS/register.css";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { showloading,hideloading } from '../Component/Redux/Action';
import Spinner from '../Component/Spinner';

const Register = () => {
const navi=useNavigate();

const dispatch=useDispatch();
const selector=useSelector((state)=>state.alerts.loading);


  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    phoneNo: ''
  })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    try{
      e.preventDefault();
      console.log(state);
      
  
      dispatch(showloading())
  // posting data to server......
   await axios.post("http://localhost:4001/api/register",state)
   .then((res)=>{
    dispatch(hideloading)
    if(res.data.success){
      toast.success(res.data.message)
    }
    else{
      toast.warn(res.data.message);
    }
    setTimeout(()=>{
      navi("/login")
    },3000)
   
  })
  
      setState({
        name: '',
        email: '',
        password: '',
        phoneNo: ''
      })
    }
    catch(err){
      dispatch(hideloading)
      console.log(err);
    }
 
  
  }



  return (
    <div>
      <h1 className="text-center mt-3">Sign Up</h1>
      <div className="registerparent container-fluid">

        <div className="row">
          <div className="col register-form">
            {/* name.......................... */}
            <div className="div1 div">
              <label htmlFor="name">Name:</label>  <br />
              <input type="text" id="name" className="name-input" value={state.name} name="name" onChange={handleChange} required />
            </div>

            {/* email............. */}
            <div className="div1 div">
              <label htmlFor="email">Email:</label> <br />
              <input type="email" id="email" className="email-input" value={state.email} name="email" onChange={handleChange} required />
            </div>

            {/* password........................ */}
            <div className="div1 div">
              <label htmlFor="password">Password:</label> <br />
              <input type="text" id="password" className="password-input" value={state.password} name="password" onChange={handleChange} required />
            </div>
            {/* phone-no................... */}
            <div className="div1 div">
              <label htmlFor="phone">Phone.No:</label> <br />
              <input type="tel" maxLength={10} id="phone" className="phoneNo-input" value={state.phoneNo} name="phoneNo" onChange={handleChange} required />
            </div>

            {/* submit........... */}
            <div className="submit-div">
              {selector? <button type="submit" className="btn btn-primary2" onClick={handleSubmit}><Spinner></Spinner></button>:<button type="submit" className="btn btn-primary2" onClick={handleSubmit}>submit</button>}  
            </div>
          </div>
        </div>



      </div>

      <ToastContainer />
    </div>
  )
}

export default Register
