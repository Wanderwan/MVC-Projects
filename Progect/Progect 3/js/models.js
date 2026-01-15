export class LoginModel {
  validateEmail(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
  }

  validatePassword(password) {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);
    const minLength = password.length >= 8;
    return hasUpper && hasLower && hasDigit && hasSpecial && minLength;
  }

  generateToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 12; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token.match(/.{1,4}/g).join("-");
  }
}
