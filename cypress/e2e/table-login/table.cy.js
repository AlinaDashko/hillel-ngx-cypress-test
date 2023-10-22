class SmartTablePage {
  visitPage() {
    cy.visit('pages/tables/smart-table');
  }

  clickAddButton() {
    cy.get('.ng2-smart-action-add-add').click();
  }

  addUser(id, firstName, lastName, username, email, age) {
    cy.get('input[ng-reflect-name="id"]').type(id);
    cy.get('input[ng-reflect-name="firstName"]').type(firstName);
    cy.get('input[ng-reflect-name="lastName"]').type(lastName);
    cy.get('input[ng-reflect-name="username"]').type(username);
    cy.get('input[ng-reflect-name="email"]').type(email);
    cy.get('input[ng-reflect-name="age"]').type(age);
    cy.get('a.ng2-smart-action-add-create').click();
  }

  editUserFirstName(rowIndex, editedFirstName) {
    cy.get(`table tr:nth-child(${rowIndex}) .ng2-smart-action-edit-edit`).click();
    cy.get('input[ng-reflect-name="firstName"]').clear().type(editedFirstName);
    cy.get('a.ng2-smart-action-edit-save').click();
  }

  checkUserInTable(username) {
    cy.contains('table td', username);
  }
}

describe('Smart Table page', () => {
  const smartTablePage = new SmartTablePage();

  it('should add and edit a user', () => {
    smartTablePage.visitPage();
    smartTablePage.clickAddButton();
    smartTablePage.addUser('1', 'Alina', 'Test', 'Testik', 'alina@test.test', '25');

    smartTablePage.checkUserInTable('Testik');
    smartTablePage.editUserFirstName(1, 'EditedName');
    smartTablePage.checkUserInTable('EditedName');
  });
});
