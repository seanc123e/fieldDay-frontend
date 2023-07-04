document.addEventListener("DOMContentLoaded", (event) => {
    // LOGIN PAGE 
    if (window.location.pathname.split("/").at(-1) == "login.html") {
        let loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            document.cookie = "loggedIn";
            console.log(document.cookie);
            window.location.replace("home.html");
        })
    }

    //HOME PAGE ADDING PROFILE ICON AMONGST LOGIN
    if ((window.location.pathname.split("/").at(-1) == "home.html" && document.cookie == "loggedIn") || (window.location.pathname.split("/").at(-1) == "myEvents.html" && document.cookie == "loggedIn") || (window.location.pathname.split("/").at(-1) == "createEvent.html" && document.cookie == "loggedIn")) {
        console.log(document.cookie);
        let loginSignupBtn = document.getElementById("loginSignupBtn");
        console.log(loginSignupBtn);
        loginSignupBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>';
        loginSignupBtn.innerHTML += "<button type ='button' class='btn btn-outline-dark mx-2'>Sign out</button>"
        loginSignupBtn.setAttribute("href", "");
        //user logout button
        loginSignupBtn.addEventListener("click", function () {
            document.cookie = "loggedOut";
            loginSignupBtn.innerHTML = "Login<br>or<br>Signup";
        })
    }

})

