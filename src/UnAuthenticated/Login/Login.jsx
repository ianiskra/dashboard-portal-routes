import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";

export default function Login() {

    const user = useContext(AuthContext);

    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <label>
                    Name:
                    {/* Input Box */}
                    <input type="text" name={user.email} onChange={(e) => user.setEmail(e.target.value)} />
                    <input type="password" name="password" />
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