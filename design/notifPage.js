const div = document.querySelectorAll(".notification");
const divCircle = document.querySelectorAll(".redcircle")
const counter = document.querySelector("#counter");
const allRead = document.getElementById("allread");
const divStart = document.querySelectorAll(".unread")

counter.innerHTML = divStart.length;

const updateCounter = () => {
    const divSolo = document.querySelectorAll(".unread")
        counter.innerHTML = divSolo.length;
}


allRead.addEventListener("click", function() {
    for (let i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = "white";
        divCircle[i].classList.remove("redcircle");
        div[i].classList.remove("unread");
        updateCounter();
    }
    }
);

for(let i = 0; i < div.length; i++) {
    div[i].addEventListener("click", function() {
        div[i].style.backgroundColor = "white";
        divCircle[i].classList.remove("redcircle");
        div[i].classList.remove("unread");  
        updateCounter();
    })
}
