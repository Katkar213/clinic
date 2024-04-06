import React,{useState} from 'react'
import "./Dashboard/dashboard.css"
import"../CSS/doctorform.css"

import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux"
// import { hideloading, showloading, userName } from './Redux/Action';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Adminmenu,Usermenu} from './Dashboard/LinkData';



const ApplyDoctors = () => {
  
  // const dispatch=useDispatch();
  const user=useSelector((state)=>state.user)
  // const user2=user.name
  const [state,setState]=useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    website:"",
    address:"",
    specialization:"",
    experience:"",
    feesPerCunsaltation:"",
    timing:""



  })

  // onchange....................
  const handleChange=(e)=>{
      setState({...state,[e.target.name]:e.target.value})
  }



  // submit...................
const handleSubmit=async(e)=>{
  try{
    e.preventDefault();
    await axios.post("http://localhost:4001/api/apply-doctor",{...state,userId:user._id},{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    }).then((res)=>{

      if(res.data.success){
        toast.success("Applied Successfully")
      }
      else{
        toast.warn("Application not Approved")
      }
    })
    console.log(state);
    setState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        website:"",
        address:"",
        specialization:"",
      experience:"",
      feesPerCunsaltation:"",
      timing:""
  
    })
   
  }

  catch(err){
    console.log(err)
  }



}


// logout......
const handleLogout=()=>{
localStorage.clear();
}

let sidebarMenu=true;

// console.log(user)
if(user.isAdmin==="true"){
  // console.log("admin menu")
  sidebarMenu=Adminmenu;
}
else{
  // console.log("user menu")
  sidebarMenu=Usermenu;
}

// console.log("admin menu",Adminmenu)
// console.log("user menu",Usermenu)
  return (
    <div className="container-fluid dashboard-row">
        <div className="row ">
            <div className="col-lg-12 dashboard-parent-container">
            <div className="dashboard-left-side">
            {sidebarMenu.map((item,index)=>{
            //  const isActive=Location.pathname===LinkData.path
              return(
                <div key={index} className="menu-item">
                  <i className={item.icon}></i>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </div>
              )
            })}
             <div className="menu-item">
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
                </div>
        </div>
        <div className="dashboard-right-side">
          <div className="dashboard-header">
          <i class="fa-solid fa-bell"></i>  
          </div>
          <div className="dashboard-content">
        

        {/* form started........ */}
          <div>

            <h1 className="text-center mb-4 mt-3">Apply Doctor</h1>
          <h4 className="mt-4 padding  mb-3">Personal Details:</h4>
      <div className="registerparent doctor-register-parent container-fluid">

        <div className="row">
          <div className="col register-form">
            <div className="doctor-div1">
            {/* name.......................... */}
            <div className="div1 div">
              <label htmlFor="name"><span className="star">*</span>FirstName:</label>  <br />
              <input type="text" id="name" className="name-input" value={state.firstName} name="firstName" onChange={handleChange} required />
            </div>

            <div className="div1 div">
              <label htmlFor="name"><span className="star">*</span>LastName:</label>  <br />
              <input type="text" id="name" className="name-input" value={state.lastName} name="lastName" onChange={handleChange} required />
            </div>

            {/* email............. */}
            <div className="div1 div">
              <label htmlFor="email"> <span className="star">*</span>Email:</label> <br />
              <input type="email" id="email" className="email-input" value={state.email} name="email" onChange={handleChange} required />
            </div>
            </div>


            <div className="doctor-div1">
            {/* website........................ */}
            <div className="div1 div">
              <label htmlFor="website"> <span className="star">*</span>Website:</label> <br />
              <input type="text" id="website" className="password-input" value={state.website} name="website" onChange={handleChange} required />
            </div>
            {/* phone-no................... */}
            <div className="div1 div">
              <label htmlFor="phone"> <span className="star">*</span>Phone.No:</label> <br />
              <input type="tel" maxLength={10} id="phone" className="phoneNo-input" value={state.phone} name="phone" onChange={handleChange} required />
            </div>

               {/* address........................ */}
               <div className="div1 div">
              <label htmlFor="website"> <span className="star">*</span>Address:</label> <br />
              <input type="text" id="website" className="password-input" value={state.address} name="address" onChange={handleChange} required />
            </div>
</div>

<h4 className="mt-4 mb-3">Professional Details:</h4>

<div className="doctor-div1">
            {/* name.......................... */}
            <div className="div1 div">
              <label htmlFor="specialization"> <span className="star">*</span>Specialization:</label>  <br />
              <input type="text" id="specialization" className="name-input" value={state.specialization} name="specialization" onChange={handleChange} required />
            </div>

            <div className="div1 div">
              <label htmlFor="experience"> <span className="star">*</span>Experience:</label>  <br />
              <input type="text" id="experience" className="name-input" value={state.experience} name="experience" onChange={handleChange} required />
            </div>

            {/* email............. */}
            <div className="div1 div">
              <label htmlFor="feesPerCunsaltation"> <span className="star">*</span>Fees per Consultation:</label> <br />
              <input type="number" id="feesPerCunsaltation" className="email-input" value={state.feesPerCunsaltation} name="feesPerCunsaltation" onChange={handleChange} required />
            </div>
            </div>
            <div className="div1 div">
              <label htmlFor=" feesPerCunsaltation"> <span className="star">*</span>Timing:</label> <br />
              <input type="time" id="timing" className="email-input" value={state.feesPerCunsaltation} name="timing" onChange={handleChange} required />
            </div>

            {/* submit........... */}
            <div className="submit-div doctor-submit-div">
              {/* {selector? <button type="submit" className="btn btn-primary2" onClick={handleSubmit}><Spinner></Spinner></button>:<button type="submit" className="btn btn-primary2" onClick={handleSubmit}>submit</button>}   */}

              <button type="submit" className="btn btn-primary2 submit-btn" onClick={handleSubmit}>submit</button>
            </div>
          </div>
        </div>



      </div>

      <ToastContainer />
    </div>

            
           
          </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default ApplyDoctors


