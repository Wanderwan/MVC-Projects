const btn = document.getElementById("check-btn")
const textValue = document.getElementById("text-input")
const result = document.getElementById("text-value")
btn.addEventListener('click',() =>{
  checkPalendrome()
  console.log(textValue.value)
})
const checkValue = () =>{
  if(!textValue.value){
    alert("Пожалуйста напишите что то")
  }
}
const checkPalendrome = () => {
  if(!textValue.value){
    checkValue()
    return
  }
  if (textValue.value == textValue.value.split('').reverse().join('')){
    result.style.display = 'block'
    result.innerHTML = "Это Пландром"
  }else{
    result.style.display = 'block'
    result.innerHTML = "Это не Пландром"
}
}