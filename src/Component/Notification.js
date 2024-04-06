import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import {useSelector} from "react-redux"
import { NavLink } from 'react-router-dom'

const Notification = ({children}) => {
const{user}=useSelector((state)=>state.user)




  return (
    <div>
      <Dashboard>
        <NavLink to="/read">Read</NavLink>
        <NavLink to="/unread">Unread</NavLink>
        <h3 className="text-center mt-3">Notification Page</h3>
        <hr></hr>
         <div> {children}</div>

     

      </Dashboard>
    </div>
  )
}

export default Notification
