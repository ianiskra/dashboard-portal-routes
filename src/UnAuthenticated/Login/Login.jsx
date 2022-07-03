import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <h2>Login Page</h2>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/forgot">Forgot Password</Link>
        </div>
    )
}
