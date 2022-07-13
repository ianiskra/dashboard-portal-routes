import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";

export default function Login() {

    const [user, setUser] = useContext(AuthContext);
    const navigate = useNavigate();


    // Logic to Check Login
    // login would set the Context
    const handleLogin = (e) => {
        e.preventDefault();


        // Call Login function - would eventually be retrieving from Database
        let isLoggedIn = user.login(user);
        
        if(isLoggedIn){
            navigate("/api/dashboard");
        }

    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    {/* Input Box */}
                    <input
                        type="text"
                        name={user.email}
                        onChange={(e) => user.setEmail(e.target.value)}
                    />
                    Password:
                    <input
                        type="password"
                        name={user.password}
                        onChange={(e) => user.setPassword(e.target.value)}
                    />
                </label>
                {/* Button */}
                <input type="submit" value="Submit" />
            </form>

            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/forgot">Forgot Password</Link>
            </div>
        </div>
    );
}