import { view } from "../View/View.js"
import { model } from "../Model/Model.js"

view.addContent()
view.bindElements()

export const control = {
// Событие на проверку Email
checkEmail : view.inputEmail.addEventListener("blur", () => {
  if(view.inputEmail.value == ""){
    view.txtError.innerHTML = ""
    return
  }else if (!model.checkEmail(view.inputEmail.value)){
    view.txtError.innerHTML = "Проверте почту"
    return
  } 
  // Проверка Всех данных
  else if (model.checkCorectValue(view.inputEmail.value, view.inputPass.value)) {
    view.subBtn.disabled = false;
    view.subBtn.style.backgroundColor = "green";
  }
  }),

  // Событие на проверку Пароля 
  checkPass : view.inputPass.addEventListener("blur", () => {
  if(view.inputPass.value == ""){
    view.txtError.innerHTML = ""
    return
  }
  else if (!model.checkPasword(view.inputPass.value)){
    view.txtError.innerHTML = "Проверте пороль"
    return
  }
  // Проверка Всех данных
  else if (model.checkCorectValue(view.inputEmail.value, view.inputPass.value)) {
    view.subBtn.disabled = false;
    view.subBtn.style.backgroundColor = "green";
  }
}),
// Показываем парoль 
showPass : view.btnShowPass.addEventListener("click", () => {
  if (view.inputPass.type === "password"){
    view.inputPass.type = "text"
    view.btnShowPass.textContent = "×";
  }else {
    view.inputPass.type = "password"
    view.btnShowPass.textContent = "👁";
  }
}),
// Используем токен
useToken : view.useToken.addEventListener("click", () => {
   if (view.useToken.textContent === "Use Token") {
    // TODO: no direct access to view properties
      view.inputEmailBox.classList.add("hidden");
      view.inputPassBox.classList.add("hidden");
      view.tokenBox.classList.remove("token-box");
      view.useToken.textContent = "Back";
    }else {
      view.inputEmailBox.classList.remove("hidden");
      view.inputPassBox.classList.remove("hidden")
      view.tokenBox.classList.add("token-box");
      view.useToken.textContent = "Use Token";

    }
}),
// Проверка токина 
checkToken : view.inputToken.addEventListener("blur", () =>{
  if(view.inputToken.value == ""){
    view.txtError.innerHTML = ""
    return
  }else if (!model.checkToken(view.inputToken.value)){
    view.txtError.innerHTML = "Проверте Токен"
    view.subBtn.disabled = true;
    view.subBtn.style.backgroundColor = "gray";
    return
  }else{
    view.subBtn.disabled = false;
    view.subBtn.style.backgroundColor = "green";
  } 
})
}
