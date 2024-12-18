var loginBtn = document.getElementById("loginBtn");
var login = document.querySelector("#login");
var currentEmail = document.getElementById("currentEmail");
var currentPassword = document.getElementById("currentPassword");
var messAlert = document.getElementById("alert");
var loginValues = [];

login.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var loginData = {
        currentEmail: currentEmail.value,
        currentPassword: currentPassword.value
    };
    loginValues.push(loginData);
    
    var signData = JSON.parse(localStorage.getItem("data"));
    if (signData) {
        let isLoggedIn = false;
        for (let i = 0; i < signData.length; i++) {
            if (signData[i].email === currentEmail.value && signData[i].password === currentPassword.value) {
                isLoggedIn = true;
                window.location.href = "../home.html";
                messAlert.classList.add("d-none");
                localStorage.setItem("loggedName", JSON.stringify(signData[i].myName));
                break;
            }
        }
        
        if (!isLoggedIn) {
            messAlert.innerHTML = "Incorrect email or password. Please try again.";
            messAlert.classList.remove("d-none");
        }
    } else if (currentEmail.value === "" || currentPassword.value === "") {
        messAlert.innerHTML = "Email or password field is empty.";
        messAlert.classList.remove("d-none");
    } else {
        messAlert.innerHTML = "Please sign up.";
        messAlert.classList.remove("d-none");
    }
    
    clearInput();
});

function clearInput() {
    currentEmail.value = "";
    currentPassword.value = "";
}
