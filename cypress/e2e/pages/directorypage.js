class DirectoryPage {
  url = 'https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory';

  elements = {
    directoryTab: () => cy.get('a[href*="directory/viewDirectory"]').first(),
    nameInput: () => cy.get('.oxd-input').first(),
    searchButton: () => cy.contains('Search'),
    resetButton: () => cy.contains ('Reset'),
    cardResult: () => cy.get('.oxd-grid-item'),
    noResult: () => cy.contains('No Records Found'),
    jobTitleDropdown: () => cy.get('.oxd-select-wrapper').eq(0),
    locationDropdown: () => cy.get('.oxd-select-wrapper').eq(1),
    tableCard: () => cy.get('.oxd-table-card'),

  }

  visit() {
    cy.visit(this.url);
  }
}

export default new DirectoryPage();

