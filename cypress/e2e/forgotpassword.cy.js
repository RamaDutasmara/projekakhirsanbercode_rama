import ForgotPasswordPage from './pages/forgotpasswordpage';

describe('Forgot Password Feature - OrangeHRM', () => {

  beforeEach(() => {
    ForgotPasswordPage.visit();
    ForgotPasswordPage.openForgotPassword();
  });

  // ==============================
  // ✅ POSITIVE TEST CASES
  // ==============================

  it('TC_POS_05 - Halaman forgot password tampil dengan benar', () => {
    ForgotPasswordPage.elements.usernameInput().should('be.visible');
    ForgotPasswordPage.elements.resetButton().should('be.visible');
  });

  it('TC_POS_06 - Klik Reset tanpa isi username menampilkan error', () => {
    ForgotPasswordPage.clickReset();
    ForgotPasswordPage.elements.errorMessage().should('contain.text', 'Required');
  });

  it('TC_POS_07 - Isi username valid lalu klik Reset Password', () => {
    ForgotPasswordPage.typeUsername('Admin');
    ForgotPasswordPage.clickReset();
    cy.url().should('include', '/sendPasswordReset');
  });

  it('TC_POS_08 - Klik tombol Cancel kembali ke halaman login', () => {
    ForgotPasswordPage.clickCancel();
    cy.url().should('include', '/auth/login');
  });

  // ==============================
  // ✅ NEGATIVE TEST CASES
  // ==============================

  it('TC_NEG_06 - Klik Reset tanpa mengisi username', () => {
    ForgotPasswordPage.clickReset();
    ForgotPasswordPage.elements.errorMessage().should('be.visible')
      .and('contain.text', 'Required');
  });

  it('TC_NEG_07 - Isi username dengan spasi kosong lalu klik Reset Password', () => {
    ForgotPasswordPage.typeUsername('   ');
    ForgotPasswordPage.clickReset();
    ForgotPasswordPage.elements.errorMessage().should('be.visible')
      .and('contain.text', 'Required');
  });

});

