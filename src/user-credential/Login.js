import React from 'react'
import "../CSS/login.css";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector }from "react-redux"
import { showloading,hideloading } from '../Component/Redux/Action';
import Spinner from '../Component/Spinner';

const Login = () => {
const navi=useNavigate();

const dispatch=useDispatch();
const selector=useSelector((state)=>state.alerts.loading);
// console.log(selector)


const[state,setState]=useState({
  email:"",
  password:""

})

const handleChange = (e) => {
  e.preventDefault();
  setState({
    ...state,
    [e.target.name]: e.target.value
  });
};

const handleSubmit=async(e)=>{
  try{
console.log(state)
    e.preventDefault();
    dispatch(showloading())
    await axios.post("http://localhost:4001/api/login",{email: state.email, password: state.password })
    .then((res)=>{

      dispatch(hideloading())
      console.log(res.data.success)
      if(res.data.success){
        toast.success(res.data.message);
        setTimeout(()=>{
          navi("/")

          localStorage.setItem("token",res.data.token)
          
          localStorage.setItem("email",res.data.email)
        },4000)

        console.log(state);
        setState({
          email:"",
          password:""
        })
      }
      else{
        toast.warn(res.data.message);
      }
    
    })
  }
  catch(err){
    dispatch(hideloading())
    console.log(err)
  }

}

  return (
    <div>
            <form className="login-form">
  <div className="login-form-group">
    {/* email.............. */}
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" value={state.email} onChange={handleChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  {/* password...................... */}
  <div className="login-form-group">
    <label  htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={state.password} 
    onChange={handleChange}/>
  </div>

  {/* submit................... */}

  {selector? <button type="submit" className="btn btn-primary2" onClick={handleSubmit}><Spinner></Spinner></button>:<button type="submit" className="btn btn-primary2" onClick={handleSubmit}>submit</button>}  
 

{/* <button type="submit" className="btn btn-primary2" onClick={handleSubmit}>submit</button> */}
  
<p>Doesn't have an account till now  <NavLink to="/register">signup</NavLink></p>
</form>



<ToastContainer className="toastify  " />
    </div>
  )
}

export default Login

