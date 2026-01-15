import { LoginModel } from "./models";
import { LoginView } from "./view";

class LoginController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindShowPassword(() => this.view.togglePasswordVisibility());
    this.view.bindInputChange(() => this.onInputChange());
    this.view.bindToggleMode(() => this.onToggleMode());
    this.view.bindSubmit((e) => this.onSubmit(e));
  }

  onInputChange() {
    if (!this.view.toggleMode.checked) {
      const emailValid = this.model.validateEmail(this.view.email.value);
      const passValid = this.model.validatePassword(this.view.password.value);

      this.view.showEmailError(emailValid ? "" : "Некорректный email");
      this.view.showPasswordError(
        passValid
          ? ""
          : "Пароль должен содержать заглавную букву, цифру, спецсимвол и минимум 8 символов"
      );

      this.view.setSubmitEnabled(emailValid && passValid);
    } else {
      const tokenValid = this.view.tokenInput.value.length === 14;
      this.view.setSubmitEnabled(tokenValid);
    }
  }

  onToggleMode() {
    const tokenMode = this.view.toggleMode.checked;
    this.view.showTokenMode(tokenMode);

    if (tokenMode) {
      const token = this.model.generateToken();
      this.view.tokenInput.value = token;
    }
    this.onInputChange();
  }

  onSubmit(e) {
    e.preventDefault();
    this.view.simulateServerSend();
  }
}

new LoginController(new LoginModel(), new LoginView());

