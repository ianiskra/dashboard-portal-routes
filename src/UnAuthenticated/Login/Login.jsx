import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext, useState } from "react";

export default function Login() {

    const user = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const invalidLogin = {
        color: "red"
    }
    console.log(message);

    // let username = '';
    // let password = '';



    // Logic to Check Login
    const handleLogin = (e) => {
        e.preventDefault();


        // Call Login function - would eventually be retrieving from Database
        const isLoggedIn = user.login(username, password);

        if (isLoggedIn) {
            navigate("/api/dashboard");
        }
        else {
            setMessage("Please use a valid Username and/or Password.");
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
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)}
                    />
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)}
                    />
                </label>
                {/* Button */}
                <input type="submit" value="Submit" />
                
                <div style={invalidLogin}>{message}</div>
            </form>
            <div>
                <Link to="register">Register</Link>
                <Link to="forgot">Forgot Password</Link>
            </div>
        </div>
    );
}