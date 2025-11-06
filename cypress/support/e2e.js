import './commands';

// Abaikan error internal dari aplikasi agar test tetap jalan
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

