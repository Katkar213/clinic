import React from 'react'
import "../Dashboard/dashboard.css"
import LinkData from './LinkData'
import {NavLink} from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 dashboard-parent-container">
            <div className="dashboard-left-side">
            {LinkData.map((item,index)=>{
              return(
                <div key={index} className="menu-item">
                  <i className={item.icon}></i>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </div>
              )
            })}
        </div>
        <div className="dashboard-right-side"></div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
