import LoginPage from './pages/loginpage';

describe('Login - OrangeHRM', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('Login dengan kredensial valid', () => {
    LoginPage.login('Admin', 'admin123');
    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain', 'Dashboard');
  });

  it('Login gagal karena password salah', () => {
    LoginPage.login('Admin', 'salah123');
    LoginPage.errorMessage().should('contain', 'Invalid credentials');
  });

  it('Login gagal karena username salah', () => {
    LoginPage.login('BukanAdmin', 'admin123');
    LoginPage.errorMessage().should('contain', 'Invalid credentials');
  });

  it('Login gagal karena field kosong', () => {
    LoginPage.loginButton().click();
    cy.get('.oxd-input-field-error-message', { timeout: 8000 })
    .should('contain.text', 'Required');
  });

  it('Login gagal karena hanya isi username', () => {
    LoginPage.usernameInput().type('Admin');
    LoginPage.loginButton().click();
    cy.get('.oxd-input-field-error-message', { timeout: 8000 })
    .should('contain.text', 'Required');
  });

  it('Logout setelah login sukses', () => {
    LoginPage.login('Admin', 'admin123');
    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/auth/login');
  });

});

