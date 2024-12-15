var usernName = document.getElementById("newName");
var email = document.getElementById("newEmail");
var password = document.getElementById("newPassword");
var btn = document.getElementById("sign-up-btn");
var signUp = document.querySelector("#signUp");
var signupValues = JSON.parse(localStorage.getItem("data")) || []; // استرجاع البيانات المخزنة من localStorage

usernName.addEventListener("input", function() {
    validInput(this);
});
email.addEventListener("input", function() {
    validInput(this);
});
password.addEventListener("input", function() {
    validInput(this);
});

signUp.addEventListener("submit", function(e) {
    e.preventDefault();
    e.stopPropagation();
    var data = {
        myName: usernName.value,
        email: email.value,
        password: password.value
    };
    if (validInput(usernName) & validInput(email) & validInput(password)) {
        signupValues.push(data);
        localStorage.setItem("data", JSON.stringify(signupValues));
        clearInput();
    }
});

function validInput(e) {
    var inputRegex = {
        newName: /^[A-Z][a-z]{3,12}.{2,8}$/,
        newEmail: /^[a-zA-Z]{3,15}[0-9]{2,5}@(gmail|yahoo)\.(com)$/,
        newPassword: /^.{8,}$/
    };
    if (inputRegex[e.id].test(e.value)) {
        e.classList.replace("is-invalid", "is-valid");
        return true;
    } else {
        e.classList.add("is-invalid");
        return false;
    }
}

function clearInput() {
    usernName.value = "";
    email.value = "";
    password.value = "";
}