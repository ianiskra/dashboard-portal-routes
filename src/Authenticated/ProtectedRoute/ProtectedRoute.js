import React, { useContext } from 'react';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

/*
How do I get passed the authentication now?
https://www.robinwieruch.de/react-router-private-routes/
*/


export const ProtectedRoute = () => {

    const user = useContext(AuthContext);
    const navigate = useNavigate();

    /* Check for Valid Token from Valid Login */
    // If incorrect token
    if (!user.isAuthenticated()) {
        // Redir to Login Page
        return (<Navigate to="/login" />);
    }

    else {
        user.pageRefresh();

        return (
            <div>
                {/* Render Chilren Routes */}
                <p>Protected Route Page</p>
                <Outlet />
            </div>
        )
    }


}
