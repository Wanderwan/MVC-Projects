export class LoginView {
  constructor() {
    this.email = document.getElementById("email");
    this.password = document.getElementById("password");
    this.showPassword = document.getElementById("showPassword");
    this.submit = document.getElementById("submit");
    this.toggleMode = document.getElementById("toggleMode");
    this.tokenInput = document.getElementById("token");
    this.tokenGroup = document.getElementById("tokenGroup");

    this.emailError = document.getElementById("emailError");
    this.passwordError = document.getElementById("passwordError");
    this.form = document.getElementById("loginForm");
  }

  bindShowPassword(handler) {
    this.showPassword.addEventListener("click", handler);
  }

  bindInputChange(handler) {
    this.email.addEventListener("input", handler);
    this.password.addEventListener("input", handler);
    this.tokenInput.addEventListener("input", handler);
  }

  bindToggleMode(handler) {
    this.toggleMode.addEventListener("change", handler);
  }

  bindSubmit(handler) {
    this.form.addEventListener("submit", handler);
  }

  togglePasswordVisibility() {
    this.password.type = this.password.type === "password" ? "text" : "password";
  }

  setSubmitEnabled(enabled) {
    this.submit.disabled = !enabled;
  }

  showTokenMode(active) {
    this.tokenGroup.style.display = active ? "block" : "none";
    this.email.parentElement.style.display = active ? "none" : "block";
    this.password.parentElement.style.display = active ? "none" : "block";
  }

  showEmailError(message) {
    this.emailError.textContent = message;
  }

  showPasswordError(message) {
    this.passwordError.textContent = message;
  }

  simulateServerSend() {
    this.submit.innerText = "Отправка...";
    this.submit.disabled = true;
    setTimeout(() => {
      this.submit.innerText = "Отправить";
      this.submit.disabled = false;
      alert("✅ Данные успешно отправлены!");
    }, 1500);
  }
}
