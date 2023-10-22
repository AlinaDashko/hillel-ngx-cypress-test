describe("Login page", () => {
  it('The form must be filled in correctly', () => {
    cy.visit('/auth/login');

    cy.get('nb-login').as("loginForm");
    cy.get("@loginForm").should('be.visible');

    cy.get('#input-email').as("emailAddressInput");
    cy.get("@emailAddressInput").should('be.visible').type("alina@test.test", { delay: 50 });

    cy.get('#input-password').as("passwordInput");
    cy.get("@passwordInput").should('be.visible').type("Password1+", { delay: 50 });

    cy.get('nb-checkbox[name="rememberMe"]').find('span.custom-checkbox').as("checkbox");
    cy.get("@checkbox").should('be.visible').click();

    cy.get('button[fullwidth][status="primary"]').as("loginButton");
    cy.get("@loginButton").click();

    cy.url().should('include', '/pages');
  });
});
