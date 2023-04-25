import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ isSignedIn, children }) => {
    console.log(isSignedIn)
    if (!isSignedIn) {
        return <Navigate to="/" replace />
    }else{
        return <Navigate to="/home" replace />
    }
    return children
}
export default Protected