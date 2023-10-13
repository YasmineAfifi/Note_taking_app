const welcomeMsg = document.getElementById("welcomeMsg");
const addBtn = document.getElementById("addBtn");
const noteDescription = document.getElementById("noteDescription");

if(localStorage.getItem("userName")!=null){
    user = localStorage.getItem("userName");
    welcomeMsg.innerText = `Welcome ${user}` ;
}

// function for add function 
function addNote()
{
    if(noteDescription.innerText!="")
    {
        
    }

}
