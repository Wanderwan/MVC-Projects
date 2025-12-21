import {CounterController} from "./controller.js"

const mainBox = document.getElementById("mainBox");

//1. Кнопка добавить новый кликер.
    const newClickCount = document.createElement('button');
    newClickCount.className = "add-click-counter";
    newClickCount.textContent = "Add Click counter"
    newClickCount.type = "button"
    mainBox.appendChild(newClickCount);

    new CounterController(mainBox)
    
    newClickCount.addEventListener("click", () =>{
      new CounterController(mainBox)
    })
 

   