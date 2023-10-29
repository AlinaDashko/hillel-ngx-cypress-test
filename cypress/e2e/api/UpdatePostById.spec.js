import updatePost from "../../fixtures/updatePost.json";

describe("Posts", () => {
  it('should update a post', () => {
    cy.api({
      url: '/posts/1',
      method: 'PUT',
      body: updatePost.update,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).as("updatedPost");

    cy.get("@updatedPost").its("status")
      .should("equal", 200);
  });
})
