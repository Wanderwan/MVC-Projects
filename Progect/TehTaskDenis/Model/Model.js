export const model = {

 // Проверка Емайла
  checkEmail(str) {
    const emailRegex = /^.{2,}@(gmail\.com|mail\.ru)$/;
    const checkEmail = emailRegex.test(str)
    if(!checkEmail){
      console.log("Почта не верен")
    return false
    }else {
      console.log("Почта веренa")
      return true
    }
  },

  //Проверка Пароля
  checkPasword (str){
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).{6,}$/;
    const checkPass = passRegex.test(str)
      if(!checkPass){
        console.log("Пороль не верен")
        return false
    }else {
      console.log("Пороль верен")
      return true
    }
  },

  // Проверка Поля Пароля и Майля 
 checkCorectValue (email,pass) {

//Проверка Почты
  const emailRegex = /^.{2,}@(gmail\.com|mail\.ru)$/;
  const checkEmail = emailRegex.test(email)

//Проверка Пароля 
  const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).{6,}$/;
  const checkPass = passRegex.test(pass)

  if (checkEmail && checkPass){
    console.log("данные верны")  
    return true
  }else{
    console.log("данные не верны")
    return false
  }
 },

  // Проверка Токина
  checkToken (str){
  const tokenRegex = /^[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/;
  const checkToken = tokenRegex.test(str)
    if(!checkToken){
      return false
  }else {
    return true
  }
},
}

console.log("")