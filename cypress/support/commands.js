Cypress.Commands.add('linkShouldBe', (expectedUrl) => {
  cy.url({ timeout: 10000 }).should('eq', expectedUrl);
});
