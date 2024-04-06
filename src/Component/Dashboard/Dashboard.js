import React,{useEffect} from 'react'
import "../Dashboard/dashboard.css"

import {NavLink, Navigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { hideloading, showloading, userName } from '../Redux/Action';
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { Adminmenu,Usermenu} from '../Dashboard/LinkData';



const Dashboard = ({children}) => {
  // const Location=useLocation();
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user.user)
  const user2=user.name
  const notification = user.notification ? user.notification.length : 0;
  console.log(notification)

  // const [counting,setCounting]=useState(true)

  // console.log(user.notification.length)


// const getUser=async()=>{

 
// }

useEffect(()=>{
  try{
    dispatch(showloading())
     axios.post("http://localhost:4001/api/getUserData",{email:localStorage.getItem("email")},
    {
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res)=>{
      dispatch(hideloading())
      if(res.data.success){
        dispatch(userName(res.data.data))
      }
      else{
        <Navigate to="/login"/>
        localStorage.clear()
      }
    
    })
      }
      catch(err){
        dispatch(hideloading())
        localStorage.clear()
        console.log(err)
      }
// eslint-disable-next-line 
},[user2])


// logout......
const handleLogout=()=>{
localStorage.clear();
}

let sidebarMenu=true;

console.log(user)
if(user.isAdmin==="true"){
  console.log("admin menu")
  // setCounting(user.notification.length)
  sidebarMenu=Adminmenu;
}
else{
  console.log("user menu")
  sidebarMenu=Usermenu;
}
// const sidebarMenu=user.isAdmin?Adminmenu:Usermenu;
// console.log(sidebarMenu)
// console.log(user.notification.length)
console.log("admin menu",Adminmenu)
console.log("user menu",Usermenu)
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
                  <NavLink to={item.path}  className={({isActive})=>(isActive?"active2":"")}>{item.name}</NavLink>
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
       <NavLink to="/notification"> <i class="fa-solid fa-bell" style={{cursor:"pointer"}}></i></NavLink>  <p className="notification">{notification}</p>  <NavLink to="/profile"> <p>{user2}</p></NavLink>

          </div>

          <div className="dashboard-content">
          {children}
        

            
           
          </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
