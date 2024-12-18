var user = document.getElementById("user");
var logoutBtn = document.getElementById("logout");
var loggedName = JSON.parse(localStorage.getItem("loggedName")); 

if (loggedName) {
    user.innerHTML = loggedName;
}

logoutBtn.addEventListener("click", function() {
    
    window.location.href="../index.html"
    localStorage.removeItem("loggedName"); 
    user.innerHTML = "";
});

