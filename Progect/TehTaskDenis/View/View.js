export const view = {
  
  addContent () {
    // todo: elements to string html
    // 1. Форма
    const form = document.createElement("form");
    form.className = "login-form";
    this.mainBox.appendChild(form);

    // 2. Заголовок
    const title = document.createElement("h2");
    title.textContent = "Вход в систему";
    form.appendChild(title);

    // 3. Блок инпутов
    const inputMainBox = document.createElement("div");
    inputMainBox.className = "input-main-box";
    form.appendChild(inputMainBox);

    // 4. Email
    const emailBox = document.createElement("div");
    emailBox.id = "emailBox"
    emailBox.className = "input-box-email";
    inputMainBox.appendChild(emailBox);

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.id = "inputEmail";
    inputEmail.className = "input-email";
    inputEmail.placeholder = "Email";
    emailBox.appendChild(inputEmail);

    // 5. Password
    const passBox = document.createElement("div");
    passBox.id = "passBox"
    passBox.className = "input-box-pass";
    inputMainBox.appendChild(passBox);

    const inputPass = document.createElement("input");
    inputPass.type = "password";
    inputPass.id = "inputPass";
    inputPass.className = "input-pass";
    inputPass.placeholder = "Password";
    passBox.appendChild(inputPass);

    const showPassBtn = document.createElement("button");
    showPassBtn.type = "button";
    showPassBtn.id = "showPass";
    showPassBtn.className = "show-pass";
    showPassBtn.textContent = "👁";
    passBox.appendChild(showPassBtn);

    // 6. Token
    const tokenBox = document.createElement("div");
    tokenBox.className = "token-box";
    tokenBox.id = "tokenBox";
    inputMainBox.appendChild(tokenBox);

    const inputToken = document.createElement("input");
    inputToken.type = "text";
    inputToken.maxLength = 14;
    inputToken.id = "inputToken";
    inputToken.className = "input-token";
    inputToken.placeholder = "Введите токен";
    tokenBox.appendChild(inputToken);

    // 7. Ошибки
    const errorBox = document.createElement("div");
    errorBox.className = "erorbox";
    form.appendChild(errorBox);

    const textError = document.createElement("p");
    textError.id = "textError";
    textError.className = "text-Error"
    errorBox.appendChild(textError);

    // 8. Кнопки
    const btnBox = document.createElement("div");
    btnBox.className = "btn-box";
    form.appendChild(btnBox);

    const submitBtn = document.createElement("button");
    submitBtn.disabled = true;
    submitBtn.type = "submit";
    submitBtn.id = "submitBtn";
    submitBtn.className = "submit-btn";
    submitBtn.textContent = "Войти";
    btnBox.appendChild(submitBtn);

    const tokenBtn = document.createElement("button");
    tokenBtn.type = "button";
    tokenBtn.id = "token";
    tokenBtn.className = "use-token";
    tokenBtn.textContent = "Use Token";
    btnBox.appendChild(tokenBtn);
  },

  bindElements () {
    this.inputEmail = document.getElementById("inputEmail");
    this.inputPass = document.getElementById("inputPass");
    this.inputToken = document.getElementById("inputToken");
    this.subBtn = document.getElementById('submitBtn');
    this.btnShowPass = document.getElementById('showPass');
    this.txtError = document.getElementById('textError');
    this.useToken = document.getElementById("token");
    this.tokenBox = document.getElementById('tokenBox');
    this.inputEmailBox = document.getElementById('emailBox');
    this.inputPassBox = document.getElementById("passBox");
  },

  mainBox:document.getElementById("mainBox"),
}

