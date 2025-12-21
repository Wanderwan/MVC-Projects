export class CounterView {
  constructor(container) {
    // создаём DOM внутри container
    this.container = container

    const contentBox = document.createElement('div')
    contentBox.className = "counter-box"
    this.container.appendChild(contentBox);

    const numInput = document.createElement("input")
    numInput.className = "input-number"
    this.numDisplay = numInput
    numInput.type ="number"
    numInput.value = 0
    contentBox.appendChild(numInput);

    const buttonBox = document.createElement('div')
    buttonBox.className = "button-box"
    contentBox.appendChild(buttonBox);
    
    const btnPlus = document.createElement('button');
    btnPlus.className = "button-plus";
    this.btnPlus = btnPlus;
    btnPlus.textContent = "+"
    btnPlus.type = "button"
    buttonBox.appendChild(btnPlus);
    
    const btnReset = document.createElement('button');
    btnReset.className = "button-reset";
    this.btnReset = btnReset;
    btnReset.textContent = "Reset"
    btnReset.type = "button"
    buttonBox.appendChild(btnReset);

    const btnMinus = document.createElement('button');
    btnMinus.className = "button-minus";
    this.btnMinus = btnMinus;
    btnMinus.type = "button"
    btnMinus.textContent = "-"
    buttonBox.appendChild(btnMinus);
  }
   

  render(value) {
    this.numDisplay.value = value
  }

  onIncrement(handler) {
    this.btnPlus.addEventListener("click", handler)
  }

  onDecrement(handler) {
    this.btnMinus.addEventListener("click", handler)
  }

  onReset(handler) {
    this.btnReset.addEventListener("click", handler)
  }
}
