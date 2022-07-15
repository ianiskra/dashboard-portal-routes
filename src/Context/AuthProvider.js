import React, { createContext } from 'react';
import User from './User';

// Initialize Context
export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    
    return (
        <div>
            <AuthContext.Provider value={new User()}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
// context value would be a new User();
// const test = {

//     test1: () => {
//         this // not redefined, points at window
//     },
//     test2: function () {
//         this // redfined but on object so inherited
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