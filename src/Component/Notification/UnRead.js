import React from 'react'
import Notification from '../Notification'
import axios from "axios"
import {useSelector} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UnRead = () => {


const user = useSelector((state) => state.user.user)
    const handleMarkAllRead = async() => {
        window.location.reload()
        try{
            await axios.post("http://localhost:4001/api/get-all-notification",{userId:user._id},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res)=>{
                if(res.data.success){
            toast.success(res.data.message)
                }
            })
        }

        catch(err){
            console.log(err);
        }

    }
    console.log(user.notification)

    return (
        <div>
            <Notification>
                <div className="d-flex justify-content-end">
                    <h4 className="m-3" onClick={handleMarkAllRead}>Mark All Read</h4>
                    </div>

                    {
                      user.notification &&  user.notification.map((item, index) => {
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
            <ToastContainer/>
        </div>
    )
}

export default UnRead
