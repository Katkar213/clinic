import React,{useState,useEffect} from 'react'
import Dashboard from './Dashboard'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointments = () => {
  const [state,setState]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:4001/api/getAppointments")
    .then((res)=>{
      if(res.data.success){
setState(res.data.data)
console.log(res.data.data)

      }
      else{
        toast.warn(res.data.message)
      }
    })
  },[])
  return (
    <div>
        <Dashboard>
          <h3>Appointments:</h3>
          {state.map((item,index)=>{
            return(
              <div key={index}  className="appointment-card">
                <div className="appointment-card-first-line">
                <h4> Name of Patient:</h4>
             <p> {item.name}</p> 
                </div>
              
                <div className="appointment-card-first-line">
                <h4>Appoiment Date:</h4>
               <p>{item.date}</p>
                </div>
                <div className="appointment-card-first-line">
                <h4>Appointment Time:</h4>
              <p>{item.time}</p> 
                </div>

                <div className="appointment-card-first-line">
                <h4> Department:</h4>
             <p>{item.department}</p> 
                </div>
               
              
             </div>
            )
         

          })}
      
        </Dashboard>
     

     <ToastContainer></ToastContainer>
    </div>
  )
}

export default Appointments
