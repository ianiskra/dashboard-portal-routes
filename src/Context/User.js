// https://reactjs.org/docs/state-and-lifecycle.html

export default class User {

    // Properties for User
    firstname;
    lastname;
    email;
    token;
    tokenExpiration;
    timer;

    /* Constructor for assigning the initial state of the Login with properties overwritten*/
    constructor() {
        // saving info needed for session
        Object.assign(this, JSON.parse(sessionStorage.getItem('userSession')));
    }

    // user param to import the Setters
    async login(email, password) {
        // Check Correct Login Credentilas
        if (email === "ian@aaa.com" && password === "admin") {
            // console.log(email);

            // Adding Token to correct user
            this.token = "AAA";
            console.log(this.token);

            // Make session expiration after session - 2 minutes based on present date
            this.pageRefresh();

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

    // 
    isAuthenticated() {
        // When it's NOT NOT token and instance of Date is <= the actual Token Expiration, let's return that info    
        return !!this.token && new Date().getTime() <= this.tokenExpiration;
    }

    // Auto logout
    pageRefresh() {
        // Create expiration time after 10 seconds
        const expirationTime = (1000 * 10);

        // Expire token on given day based on expirationTime
        this.tokenExpiration = new Date().getTime() + expirationTime;
        
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            window.location.reload(false);
        }, expirationTime);

    }
}
