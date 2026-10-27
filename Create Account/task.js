


let name = document.getElementById("name");

let email = document.getElementById("email");

let password = document.getElementById("password");

let confirm = document.getElementById("confirm");

let progress = document.getElementById("progress-bar");

let strong = document.getElementById("strong");

let register = document.getElementById("register");


// Password check

password.addEventListener("input", function () {

    let value = password.value;

    if (value.length === 0) {

        progress.style.width = "0%";
        strong.innerText = "";

    }

    else if (value.length < 6) {

        progress.style.width = "45%";
        progress.style.backgroundColor = "red";

        strong.innerText = "Weak password";
        strong.style.color = "red";

    }

    else if (value.length < 8) {

        progress.style.width = "75%";
        progress.style.backgroundColor = "yellow";

        strong.innerText = "Medium password";
        strong.style.color = "orange";

    }

    else {

        // Check letter and number

        let hasLetter = /[a-zA-Z]/.test(value);

        let hasNumber = /[0-9]/.test(value);

        if (hasLetter && hasNumber) {

            progress.style.width = "100%";
            progress.style.backgroundColor = "green";

            strong.innerText = "Strong password";
            strong.style.color = "green";

        }

        else {

            progress.style.width = "100%";
            progress.style.backgroundColor = "yellow";

            strong.innerText = "Use letters and numbers";
            strong.style.color = "orange";
        }
    }

});


// Confirm password check

confirm.addEventListener("input", function () {

    if (confirm.value === "") {

        strong.innerText = "";

        return;
    }


    if (password.value !== confirm.value) {

        strong.innerText = "Passwords do not match";

        strong.style.color = "orange";

        progress.style.backgroundColor = "yellow";

    }

    else {

        let hasLetter = /[a-zA-Z]/.test(password.value);

        let hasNumber = /[0-9]/.test(password.value);


        if (password.value.length >= 8 && hasLetter && hasNumber) {

            strong.innerText = "Strong password";

            strong.style.color = "green";

            progress.style.backgroundColor = "green";

        }

        else {

            strong.innerText = "Password is not strong";

            strong.style.color = "orange";

            progress.style.backgroundColor = "yellow";

        }
    }

});


// Register button

register.addEventListener("click", function () {

    if (name.value === "") {

        alert("Please enter your name");

        return;
    }


    if (email.value === "") {

        alert("Please enter your email");

        return;
    }


    if (password.value === "") {

        alert("Please enter your password");

        return;
    }


    if (confirm.value === "") {

        alert("Please confirm your password");

        return;
    }


    if (password.value !== confirm.value) {

        alert("Passwords do not match");

        return;
    }


    if (password.value.length < 8) {

        alert("Password must be at least 8 characters");

        return;
    }


    let hasLetter = /[a-zA-Z]/.test(password.value);

    let hasNumber = /[0-9]/.test(password.value);


    if (!hasLetter || !hasNumber) {

        alert("Password must contain letters and numbers");

        return;
    }


    alert("Registration successful!");

});

