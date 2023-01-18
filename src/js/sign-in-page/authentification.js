import Notiflix from "notiflix"

const emailEl = document.querySelector(".email")
const passwordEL = document.querySelector(".password")
const signupbtnEl = document.querySelector(".signupbtn")
const loginbtnEl = document.querySelector(".loginbtn")
const logoutbtnEl = document.querySelector(".logoutbtn")
const cancelbtnEL = document.querySelector(".cancelbtn")
const mainSignbtn = document.querySelector(".mainSignbtn")

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
    console.log(error)
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
        console.log(userCredential.user)
        monitorAuthState()
        const removeSignbtn = await addVisHidden
        // Notiflix.Notify.success(`You signed in with ${userCredential.user.email}`, { timeout: 14000, })
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
        console.log(userCredential.user)
        monitorAuthState()
    }
    catch (error) {
        showLoginError(error)
    }
}

const logout = async () => {
    await signOut(auth)
    // console.log("Signed Out")
    // Notiflix.Notify.success("Signed out")
}

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            redirrectToMainPage()
        }
    })
}

function addVisHidden() {
    if (document.location.href === "http://localhost:1234/") {
        mainSignbtn.classList.add("visually-hidden")
    }
}
function redirrectToMainPage() {
    window.location.replace("http://localhost:1234/")
}

loginbtnEl.addEventListener("click", loginEmailPassword)

signupbtnEl.addEventListener("click", createAccount)

cancelbtnEL.addEventListener("click", redirrectToMainPage)

logoutbtnEl.addEventListener("click", logout)
