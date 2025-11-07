import LoginPage from './pages/loginpage';
import DirectoryPage from './pages/directorypage';

const login = LoginPage.elements;
const directory = DirectoryPage.elements;

describe('Directory - OrangeHRM', () => {

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('Admin', 'admin123');
    cy.url().should('include', '/dashboard');
    directory.directoryTab().click();
  });

  // ==============================
  // ✅ POSITIVE TEST CASES
  // ==============================

  it('TC_POS_09 - Halaman Directory berhasil dibuka', () => {
    cy.url().should('include', '/directory/viewDirectory');
  });

  it('TC_POS_10 - Search tanpa input menampilkan hasil', () => {
    directory.searchButton().click();
    directory.cardResult().should('exist');
  });

  it('TC_POS_11 - Search nama valid menampilkan hasil', () => {
    directory.nameInput().type('Linda');
    directory.searchButton().click();
    directory.cardResult().should('exist');
  });

it('TC_POS_12 - Pencarian tanpa input tidak error', () => {
    DirectoryPage.elements.searchButton().click();
    cy.wait(1000);
    cy.get('.orangehrm-directory-card, .oxd-grid-item').should('exist');
  });

  it('TC_POS_13 - Dropdown Job Title dapat diklik dan menampilkan opsi', () => {
    DirectoryPage.elements.jobTitleDropdown().click();
    cy.get('.oxd-select-dropdown').should('be.visible');
  });

  it('TC_POS_14 - Pencarian berdasarkan lokasi menampilkan hasil', () => {
    DirectoryPage.elements.locationDropdown().click();
    cy.contains('New York', { matchCase: false }).click();
    DirectoryPage.elements.searchButton().click();
    cy.wait(1000);
    cy.get('.orangehrm-directory-card, .oxd-grid-item').should('be.visible');
  });

  // ==============================
  // ❌ NEGATIVE TEST CASES
  // ==============================

  it('TC_NEG_08 - Input nama dengan karakter spesial tidak menyebabkan error', () => {
    directory.nameInput().type('@@@###$$$');
    directory.searchButton().click();
    cy.wait(1000);
    cy.url().should('include', '/directory/viewDirectory'); // tetap di halaman directory
  });

  it('TC_NEG_09 - Input nama terlalu panjang tidak membuat aplikasi crash', () => {
    const longText = 'A'.repeat(500);
    directory.nameInput().type(longText);
    directory.searchButton().click();
    cy.wait(1000);
    cy.url().should('include', '/directory/viewDirectory');
  });

  it('TC_NEG_10 - Pilih job title lalu klik Reset membersihkan field input', () => {
    directory.jobTitleDropdown().click();
    cy.get('.oxd-select-dropdown > :nth-child(2)').click(); // pilih salah satu job
    DirectoryPage.elements.resetButton().click();
    directory.nameInput().should('have.value', '');
  });

});

