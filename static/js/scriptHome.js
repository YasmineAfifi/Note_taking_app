const welcomeMsg = document.getElementById("welcomeMsg");
const addBtn = document.getElementById("addBtn");
const noteDescription = document.getElementById("noteDescription");
const cardsContainer = document.getElementById("cardsContainer");
const logOutBtn = document.getElementById("logOutBtn");


// function for creating cards and added it into home page
function createNoteCards()
 {
    let divCard = document.createElement("div");
    divCard.className = "card";
    divCard.style = "width: 18rem";
    cardsContainer.appendChild(divCard);

    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);

    let paragraph = document.createElement("p");
    paragraph.className = "card-text";
    divCardBody.appendChild(paragraph);
    return paragraph;

}

// stored notes in the local storage
function storeDataLocalStorage() {
    let myNote = noteDescription.value;
    if (myNote != "") {
        if (localStorage.getItem("Notes") == null || localStorage.getItem == "") {
            localStorage.setItem("Notes", myNote);
        } else {
            let myOldNotes = localStorage.getItem("Notes");
            let myNotes = myOldNotes + "," + myNote;
            localStorage.setItem("Notes", myNotes);
        }

    }

myNote="";
}
  
// function to delete the localStorage

function logOut(){
   localStorage.clear();

    
}

    // display username in local storage
    if (localStorage.getItem("userName") != null) {
        let msg = localStorage.getItem("greeting");
        welcomeMsg.innerText =msg;
    }


// craete the card container and appear it in html 
if (localStorage.getItem("Notes") !=null) {

    let myNoteList = localStorage.getItem("Notes").split(",");
    for (let i = 0; i < myNoteList.length; i++) {
        let paraText = createNoteCards();
        paraText.innerText = myNoteList[i];
    }
}




addBtn.addEventListener("click", storeDataLocalStorage);
logOutBtn.addEventListener("click",logOut);

