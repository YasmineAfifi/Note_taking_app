const indexBtn = document.getElementById("indexBtn");
const userName = document.getElementById("userName");

// save the username in localStorage
function saveUserName(){
  
if(userName.value!=""){

    localStorage.setItem("userName",userName.value.trim())
    window.location.href = "http://127.0.0.1:5000/home";
}else
{
    window.location.href = "http://127.0.0.1:5000";

}

}




// events for button 
indexBtn.addEventListener("click",saveUserName)