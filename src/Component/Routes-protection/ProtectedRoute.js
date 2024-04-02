import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    if(localStorage.getItem("token")){
        console.log("iam stay here")
        return children
    }
    else{
        // console.log("return to login")
      return <Navigate to="/login" />
    }
}

export default ProtectedRoute
