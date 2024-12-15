
var loginBtn = document.getElementById("loginBtn")
var login = document.querySelector("#login")
var currentEmail = document.getElementById("currentEmail")
var user = document.getElementById("user")
var currentPassword = document.getElementById("currentPassword")
var messAlert = document.getElementById("alert")
var loginValues = []

// -----------------------------------------------------------
login.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var loginData = {
        currentEmail: currentEmail.value,
        currentPassword: currentPassword.value,
    }
    loginValues.push(loginData)
    signData = JSON.parse(localStorage.getItem("data"))
    if (signData) {
        for (let i = 0; i < JSON.parse(localStorage.getItem("data")).length; i++) {
            if (signData[i].email == currentEmail.value && signData[i].password == currentPassword.value) {
                window.location.href = "../home.html"
                messAlert.classList.add("d-none")

                user.innerHTML += `${signData[i].myName}`;
                targetName=signData[i].myName
                


            }
            else {
                messAlert.classList.remove("d-none")
            }
        }

    }
    else {
        messAlert.innerHTML = "please sign-up"
        messAlert.classList.remove("d-none")
    }
    clearInput()

})
console.log(user);


function clearInput() {
    usernName.value = "";
    email.value = ""
    password.value = ""
}

