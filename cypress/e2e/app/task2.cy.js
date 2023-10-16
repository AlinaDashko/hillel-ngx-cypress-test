describe('Dialog page', () => {
  it('modal window should be opened', () => {
    cy.visit('pages/modal-overlays/dialog');
    cy.get('button:contains("Enter Name")').click();
    cy.get('.cdk-overlay-pane').should('be.visible');
    cy.get(".cdk-overlay-pane nb-card-header").should("have.text", "Enter your name");
    cy.get(".cdk-overlay-pane input[placeholder='Name']").should('exist');
    cy.get(".cdk-overlay-pane button[ng-reflect-status='success']").should('have.text', 'Submit');
    cy.get(".cdk-overlay-pane button[ng-reflect-status='danger']").should('have.text', 'Cancel');
  });
})
