import React from 'react'
import Notification from '../Notification'

import axios from "axios"
import {useSelector} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Read = () => {
    const user = useSelector((state) => state.user.user)
    console.log(user)
    const DeleteAllRead=async()=>{
      window.location.reload()
try{
  await axios.post("http://localhost:4001/api/delete-all-notification",{userId:user._id},{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })
  .then((res)=>{
    if(res.data.success){
      
      toast.success(res.data.message)
    }
    else{
      toast.warn(res.data.message)
    }
   
  })
}
catch(err){
  console.log(err)
}
}
  return (
    <div>
      <Notification>
     
        <div className="d-flex justify-content-end">
                    <h4 className="m-3" onClick={DeleteAllRead}>Delete All Read</h4>
                    </div>

                    {
                      user.seennotification &&  user.seennotification.map((item, index) => {
                            return (
                                <div key={index} className="card">
                                 <div className="card-text">
                                    {item.message}
                                    </div>
                                </div>
                            )
                        })
                    }
      </Notification>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Read
