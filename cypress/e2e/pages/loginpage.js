class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  usernameInput() {
    return cy.get('input[name="username"]');
  }

  passwordInput() {
    return cy.get('input[name="password"]');
  }

  loginButton() {
    return cy.get('button[type="submit"]');
  }

  errorMessage() {
    return cy.get('.oxd-alert-content-text');
  }

  login(username, password) {
    this.usernameInput().type(username);
    this.passwordInput().type(password);
    this.loginButton().click();
  }
}

export default new LoginPage();

