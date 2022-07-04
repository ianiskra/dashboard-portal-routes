import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// The redirectPath is redirecting them to the login page

/*
Prop is the user,
redirectPath is redirecting them to the login

How do I get passed the authentication now?
https://www.robinwieruch.de/react-router-private-routes/
*/


export const ProtectedRoute = ({
    user,
    redirectPath = '/login',
}) => {

    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return (
        <div>
            <h1>Protected Route</h1>
            <Outlet />
        </div>
    )
}
