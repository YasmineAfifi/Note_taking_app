const indexBtn = document.getElementById("indexBtn");
const userName = document.getElementById("userName");
let welcomeMessage = ""

// save the username in localStorage

function saveUserName()
 {
if (userName.value != "" && localStorage.getItem("userName") == null) {
    localStorage.setItem("userName", userName.value.trim());
    welcomeMessage = `Welcome ${localStorage.getItem("userName")}`;
    localStorage.setItem("greeting", welcomeMessage);
    localStorage.setItem("first","true");
    window.location.href = "http://127.0.0.1:5000/home";

}else {
    window.location.href = "http://127.0.0.1:5000";

}

}
// check if user not enter the first time
if (userName.value == "" && localStorage.getItem("userName") != null) {
    welcomeMessage = `Welcome Back ${localStorage.getItem("userName")}`;
    localStorage.setItem("greeting", welcomeMessage);
    localStorage.setItem("first","false");
    window.location.href = "http://127.0.0.1:5000/home";

}

// events for button 
indexBtn.addEventListener("click", saveUserName);