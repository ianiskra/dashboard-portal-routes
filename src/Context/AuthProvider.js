import { createContext, useState } from 'react'

// Initialize Context
export const AuthContext = createContext(null);

export const AuthProvider = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("AAA");

    const end = {
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken
    }

    return end;
}