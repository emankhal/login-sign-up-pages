
var user =document.getElementById("user")
logoutBtn=document.getElementById("logout")
user.innerHTML += `${JSON.parse(localStorage.getItem("data"))[0].myName}`;
logoutBtn.addEventListener("click",function(){
    window.location.href="../index.html"
})

