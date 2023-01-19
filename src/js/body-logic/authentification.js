import Notiflix from "notiflix"

const signInHeaderEl = document.querySelector(".header-sign-in")
const popupEl = document.querySelector(".sign-popup")
const cancelBtnEl = document.querySelector(".login-cancel-button")



signInHeaderEl.addEventListener("click", openModal)

cancelBtnEl.addEventListener("click", closeModal)

function openModal() {
    popupEl.style.display = "flex"
    document.body.style.overflow = "hidden"
    document.body.style.height = "100%"
}

function closeModal() {
    popupEl.style.display = "none"
    document.body.style.overflow = "visible"
}


const emailEl = document.querySelector(".sign-popup-email-input")
const passwordEL = document.querySelector(".sign-popup-psw-input")
const signupbtnEl = document.querySelector(".modal-signup-button")
const loginbtnEl = document.querySelector(".modal-log-in-button")
const cancelbtnEL = document.querySelector(".login-cancel-button")
const logoutbtnEl = document.querySelector(".header-sign-out")


import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCiganVehDRWNu8DaopL49QNtQWcOnsRz8",
    authDomain: "filmoteka-3953e.firebaseapp.com",
    projectId: "filmoteka-3953e",
    storageBucket: "filmoteka-3953e.appspot.com",
    messagingSenderId: "570128539922",
    appId: "1:570128539922:web:4bc967e78fce05a40693cb",
    measurementId: "G-P61BZ6KQ5V"
};

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const showLoginError = (error) => {

    if (error.code === "auth/wrong-password") {
        Notiflix.Notify.failure(`Wrong password. Try again.`)
        return
    }
    if (error.code === "auth/email-already-in-use") {
        Notiflix.Notify.failure(`This email is already in use`)
        return
    }
    if (error.code === "auth/weak-password") {
        Notiflix.Notify.failure(`Password must contain at least 6 characters`)
        return
    }
    if (error.code === "auth/user-not-found") {
        Notiflix.Notify.failure(`There is no user with such email`)
        return
    }
    if (error.code === "auth/invalid-email") {
        Notiflix.Notify.failure(`Please provide valid email`)
        return
    }
    if (error.code === "auth/too-many-requests") {
        Notiflix.Notify.failure(`Too many requests`)
        return
    }
    if (error.code === "auth/internal-error") {
        Notiflix.Notify.failure(`Please provide password`)
        return
    }
    else {
        Notiflix.Notify.failure(`Error: ${error}`)
        return
    }
}

const loginEmailPassword = async (e) => {
    e.preventDefault();
    const loginEmail = emailEl.value;
    const loginPassword = passwordEL.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    
        monitorAuthState()
        const removeSignbtn = await addVisHidden
    }
    catch (error) {
        showLoginError(error)
    }
}

const createAccount = async (e) => {
    e.preventDefault();
    const loginEmail = emailEl.value;
    const loginPassword = passwordEL.value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
      
        monitorAuthState()
    }
    catch (error) {
        showLoginError(error)
    }
}

const logout = async () => {
    await signOut(auth)

    // Notiflix.Notify.success("Signed out")
}

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            logoutbtnEl.classList.remove("visually-hidden")
            signInHeaderEl.classList.add("visually-hidden")
            Notiflix.Notify.success("You signed in")
            closeModal()
        }
        else {
            Notiflix.Notify.success("You logged out")
            logoutbtnEl.classList.add("visually-hidden")
            signInHeaderEl.classList.remove("visually-hidden")
        }
    })
}

function addVisHidden() {
    if (document.location.href === "http://localhost:1234/") {
        mainSignbtn.classList.add("visually-hidden")
    }
}

loginbtnEl.addEventListener("click", loginEmailPassword)

signupbtnEl.addEventListener("click", createAccount)

cancelbtnEL.addEventListener("click", closeModal)

logoutbtnEl.addEventListener("click", logout)
