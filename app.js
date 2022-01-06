import {
    redirectIfLoggedIn,
    signInUser,
    signupUser,
} from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpPassword = document.getElementById('sign-up-password');
const signUpEmail = document.getElementById('sign-up-email');

// if user currently logged in, redirect
await redirectIfLoggedIn();

signUpForm.addEventListener('submit', async(event)=>{
    event.preventDefault();
    const user = await signupUser(signUpEmail.value, signUpPassword.value);

    if (user){
        await redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async(event)=>{
    event.preventDefault();
    const user = await signInUser(signInEmail, signInPassword);

    if (user){
        await redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});