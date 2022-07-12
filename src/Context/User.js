// https://reactjs.org/docs/state-and-lifecycle.html

import React from 'react';

export default class User {

    // Propties for User
    firstname;
    lastname;
    username;
    email;
    password;
    token;
    tokenExpiration;

    /* Methods that set the Propties for Users */
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

    setExpirationTime = (setExpirationTime) => {
        console.log({ setExpirationTime });
        this.setExpirationTime = setExpirationTime;
    }

    login = async(user) => {

        // Check Correct Login Credentilas
        if (user.email === "ian@aaa.com" && user.password === "admin") {

            console.log(user.email);

            // Token value
            user.token = "AAA";

            // Expiration after session
            user.tokenExpiration = new Date();
            user.tokenExpiration.setDate()

            user.firstname = "Ian";
            user.lastname = "Iskra";

            // Display Token
            console.log(user.token);

            return true;
        }
        else {
            return null;
        }
    }
}