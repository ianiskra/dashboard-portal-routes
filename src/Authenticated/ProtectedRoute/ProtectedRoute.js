import React, { useContext } from 'react';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

// The redirectPath is redirecting them to the login page

/*
How do I get passed the authentication now?
https://www.robinwieruch.de/react-router-private-routes/
*/


export const ProtectedRoute = () => {

    const user = useContext(AuthContext);
    const navigate = useNavigate();

    /* Check for Valid Token from Valid Login */
    // If incorrect token
    if (!user.token) {
        // Redir to Login Page
        return (<Navigate to="/login" />);
    }
    // Otherwise navigate to dashboard
    else {
        return (
            <div>
                {/* Render Chilren Routes */}
                <p>Protected Route Page</p>
                <Outlet />
            </div>
        )
    }


}
