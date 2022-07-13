// https://reactjs.org/docs/state-and-lifecycle.html



export default class User {
    
    // Propties for User
    firstname;
    lastname;
    username;
    email;
    password;
    token;
    tokenExpiration;

    /* Methods that are Setting the properties of User(s)
    Setters are value that can be assigned
    */
    setFirstname = (firstname) => {
        console.log({ firstname });
        this.firstname = firstname;
    }

    setLastname = (lastname) => {
        this.lastname = lastname;
    }

    setUsername = (username) => {
        console.log({ username });
        this.username = username;
    }

    setEmail = (email) => {
        console.log({ email });
        this.email = email;
    }

    /* How to switch out when connecting to the Database instead of assigning a value. Would be using the fetch() from API */
    setPassword = (password) => {
        console.log({ password });
        this.password = password;
    }

    setToken = (token) => {
        console.log({ token });
        this.token = token;
    }

    // Determine how long I'm logged in
    setTokenExpiration = (setTokenExpiration) => {
        console.log({ setTokenExpiration });
        this.setTokenExpiration = setTokenExpiration;
    }

    //
    setExpirationTime = (setExpirationTime) => {
        console.log({ setExpirationTime });
        this.setExpirationTime = setExpirationTime;
    }

    // User is an instance
    login = async (user) => {

        // Check Correct Login Credentilas
        if (user.email === "ian@aaa.com" && user.password === "admin") {
            console.log(user.email);

            // Adding Token to correct user
            user.token = "AAA";

            // Make session expiration after session - 2 minutes based on present date
            user.tokenExpiration = new Date();
            user.tokenExpiration.setMinutes(user.tokenExpiration.getMinutes() + 2);

            console.log(user.tokenExpiration);

            user.firstname = "Ian";
            user.lastname = "Iskra";

            // Session Storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage#basic_usage
            sessionStorage.setItem("userSession", JSON.stringify(user));
            
            
            console.log(sessionStorage.getItem("userSession"));

            

            // Display Token
            console.log(user.token);

            return true;
        }
        else {
            return null;
        }
    }
}