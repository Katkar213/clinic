import React,{useState,useEffect} from 'react'
import Dashboard from '../Dashboard/Dashboard'
import axios from "axios"
import "./user.css"

const Doctors = () => {
  

  const [doctor,setDoctor]=useState([])
  const getDoctors=async()=>{
  await axios.get("http://localhost:4001/api/getAllDoctors",{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })
  .then((res)=>{
    
      setDoctor(res.data.data)
    
  
    console.log(res.data.data)
  })
  
  }
  console.log(doctor)


//   const handleAccountStatus=async(record,status)=>{
//     try{
// const res=await axios.post("http://localhost:4001/api/changeAccountStatus",{doctorId:record._id,status:status},
// {
//   headers:{
//     Authorization:`Bearer ${localStorage.getItem("token")}`
//   }
// })
// if(res.data.success){
//   alert(res.data.message)
// }
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
  
  useEffect(()=>{
    getDoctors();
  },[])

  return(
<Dashboard>
<h3 className="mb-3 mt-3">Doctors Data:</h3>
<table border="1">
      <thead>
                  <th>Name</th>
                  <th>Experiance</th>
                  <th>Phone</th>
              
                </thead>
                <tbody >
        {doctor.map((item,index)=>{
          return(
                
                  <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.experience}</td>
                    <td>{item.phone}</td>
                   
                  </tr>
           
    
          )
        })}
             </tbody>
        </table>
        </Dashboard>
  )
        
   
}

export default Doctors
