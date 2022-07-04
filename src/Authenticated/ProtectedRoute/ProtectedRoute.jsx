import React from 'react'
import { Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
    return (
        <div>
            <h1>Protected Route</h1>
            <Outlet />
        </div>
    )
}
