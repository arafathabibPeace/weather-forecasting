import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Protected = ({children }) => {
    const { codeParam } = useSelector((state) => state.codeParam)
    console.log(codeParam)
    if (!codeParam) {
        return <Navigate to="/" replace />
    }
    return children
}
export default Protected