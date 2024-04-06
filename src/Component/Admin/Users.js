import React,{useState,useEffect} from 'react'
import Dashboard from '../Dashboard/Dashboard'
import axios from "axios"
import "./user.css"

const Users =() => {
  const [user,setUser]=useState([])
const getUsers=async()=>{
await axios.get("http://localhost:4001/api/getAllUsers",{
  headers:{
    Authorization:`Bearer ${localStorage.getItem("token")}`
  }
})
.then((res)=>{
  
    setUser(res.data.data)
  

  console.log(res.data.data)
})

}
console.log(user)

useEffect(()=>{
  getUsers();
},[])

  return (
    <div>

      <Dashboard>
        <h3 className="mb-3 mt-3">Users Data:</h3>
      <table border="1">
      <thead>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Doctor</th>
                  <th>Action</th>
                </thead>
                <tbody >
        {user.map((item,index)=>{
          return(
                
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.isDoctor}</td>
                    <td><button className="block-button">Block</button></td>
                  </tr>
           
    
          )
        })}
             </tbody>
        </table>
      </Dashboard>
    </div>
  )
}

export default Users
