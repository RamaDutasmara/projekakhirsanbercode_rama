class ForgotPasswordPage {
  elements = {
    forgotPasswordLink: () => cy.contains('Forgot your password?'),
    usernameInput: () => cy.get('input[name="username"]', { timeout: 10000 }),
    resetButton: () => cy.get('button[type="submit"]', { timeout: 10000 }),
    cancelButton: () => cy.contains('Cancel'),
    errorMessage: () => cy.get('.oxd-input-group__message'),
    successMessage: () => cy.contains('Reset Password link sent successfully'),
  };

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('body', { timeout: 10000 }).should('be.visible'); // pastikan halaman sudah siap
    cy.contains('Forgot your password?', { timeout: 10000 }).should('be.visible');
  }

  openForgotPassword() {
    this.elements.forgotPasswordLink().click();
    cy.url().should('include', '/requestPasswordResetCode');
  }

  typeUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  clickReset() {
    this.elements.resetButton().click();
  }

  clickCancel() {
    this.elements.cancelButton().click();
  }
}

export default new ForgotPasswordPage();

