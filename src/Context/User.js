// https://reactjs.org/docs/state-and-lifecycle.html

import { useNavigate } from "react-router-dom";

export default class User {
    
    // Properties for User
    firstname;
    lastname;
    email;
    token;
    tokenExpiration;
    timer;

    // Constructor
    constructor(){
        Object.assign(this, JSON.parse(sessionStorage.getItem('userSession')));
    }

    // user param to import the Setters
    async login (email, password) {
        // Check Correct Login Credentilas
        if (email === "ian@aaa.com" && password === "admin") {
            // console.log(email);

            // Adding Token to correct user
            this.token = "AAA";
            console.log(this.token);

            // Make session expiration after session - 2 minutes based on present date
            this.refresh();

            console.log(this.tokenExpiration);

            this.firstname = "Ian";
            this.lastname = "Iskra";
            this.email = email;

            // Session Storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage#basic_usage
            sessionStorage.setItem("userSession", JSON.stringify(this));
            console.log(sessionStorage.getItem("userSession"));

            


            return true;
        }
        else {
            return null;
        }
    }

    isAuthenticated() {    
        // When it's NOT NOT token and instance of Date is <= the actual Token Expiration, let's return that info    
        return !!this.token && new Date().getTime() <= this.tokenExpiration;
    }

    refresh() {
        const expirationTime = (1000 * 5);

        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            window.location.reload(false);
        }, expirationTime);

        this.tokenExpiration = new Date().getTime() + expirationTime;
    }
}
