const inputVal = document.getElementById("inputValue");
const cnwBtn = document.getElementById("cnwBtn");
const result  = document.getElementById("result");

  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900,  symbol: 'CM' },
    { value: 500,  symbol: 'D' },
    { value: 400,  symbol: 'CD' },
    { value: 100,  symbol: 'C' },
    { value: 90,   symbol: 'XC' },
    { value: 50,   symbol: 'L' },
    { value: 40,   symbol: 'XL' },
    { value: 10,   symbol: 'X' },
    { value: 9,    symbol: 'IX' },
    { value: 5,    symbol: 'V' },
    { value: 4,    symbol: 'IV' },
    { value: 1,    symbol: 'I' }
  ]

  const conv = () =>{
    result.style.display = 'block'
    result.innerHTML =  "" 
    if(!inputVal.value){
     result.classList.add("resultErr")
     result.innerHTML = "Ввидите число" 
     return
    }else if (inputVal.value <= 0){
      result.classList.remove("resultErr")
      result.innerHTML = "Ввидите число больше 0" 
      return
    }
      let num = inputVal.value
      let text = ""
    romanNumerals.forEach((el) => {
    while (num >= el.value){
       result.classList.remove("resultErr")  
        text += el.symbol
        num -= el.value
    } 

      result.innerText = `${inputVal.value} = ${text}`
    })
    inputVal.value = ""
  }
  cnwBtn.addEventListener('click', conv)
  inputVal.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
      conv()
    }
  }) 


