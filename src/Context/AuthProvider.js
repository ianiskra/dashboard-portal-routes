import React, { createContext, useState } from 'react';
import User from './User';

// Initialize Context
export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [token, setToken] = useState("AAA");

    // // Login Function Check - Pass to Login.jsx
    // const login = async (username, password) => {

        //     // 1. If valid email & pw
        //     if(username === 'ian@aaa.com' && password === 'admin'){
            
            //         // 2. That would be considered valid login - Update State Change Re-Render
            //         setToken(token);
            
            //         // 3. Navigate them to Dashboard Page
            //         // Could consider this step to be placed in Login.jsx or ProtectedRoute.js

    //     }else{
        //         // 4. Otherwise, wrong credentials return false
    //         return false;
    //     }
    // }
    
    return (
        <div>
            <AuthContext.Provider value={new User()}>
                {children}
            </AuthContext.Provider>
        </div>
    )
    
    




    // context value would be a new User();
    // const test = {
    
    //     test1: () => {
    //         this // refers to the object test
    //     },
    //     test2: function () {
    //         this // refers to the function
    //     }
    // }
    
    // export class Test {
    //     test2() {
    //         this // refers to the instance of the class Test
    //             ARROW FUNCTIONS will NOT REDFINE "THIS"
    //             FUNCTION DEFINITIONS WILL REDFINE "THIS" TO BE THE FUNCTION
    //         const test = function () {
    //             this // refers to the function again
    //         }
    //         const test2 = () => {
    //             this // still refers to the class/instance
    //         }
    //     }
    // }
    
    // 
}