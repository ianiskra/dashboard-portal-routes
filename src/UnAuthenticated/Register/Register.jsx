import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export default function Register() {
  const user = useContext(AuthContext);
  return (
    <div>
        <h2>Registration Page</h2>
        {user}
    </div>
  )
}
