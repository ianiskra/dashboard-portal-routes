// https://reactjs.org/docs/state-and-lifecycle.html

export default class User {
    
    // Properties for User
    firstname;
    lastname;
    email;
    token;
    tokenExpiration;

    // user param to import the Setters
    async login (email, password) {
        // Check Correct Login Credentilas
        if (email === "ian@aaa.com" && password === "admin") {
            // console.log(email);

            // Adding Token to correct user
            this.token = "AAA";
            console.log(this.token);

            // Make session expiration after session - 2 minutes based on present date
            this.tokenExpiration = new Date();
            this.tokenExpiration.setMinutes(this.tokenExpiration.getMinutes() + 2);

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
        return !!this.token;
    }
}
