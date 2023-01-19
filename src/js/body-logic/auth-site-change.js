const signOutEl = document.querySelector(".header-sign-out")
const signInEl = document.querySelector(".header-sign-in")

export function nnn(value) {
    let authState = 0;
  
    authState += value;
 
    return authState;
}

if (nnn > 0) {
    signInEl.classList.add("visually-hidden")
    signOutEl.classList.remove("visually-hidden")
} else {
    signInEl.classList.remove("visually-hidden")
    signOutEl.classList.add("visually-hidden")
}