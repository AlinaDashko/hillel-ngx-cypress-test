import newPost from "../../fixtures/newPost.json";
import newPostNegative from "../../fixtures/newPostNegative.json";

describe("Posts", () => {
  it('should create new post', () => {
    cy.api({
      url: '/posts',
      method: 'POST',
      body: newPost.create,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).as("createPost");

    cy.get("@createPost").its("status")
      .should("equal", 201);

    cy.get("@createPost").its("body")
      .should("deep.include", newPost.create);
  });

  describe("Posts", () => {
    it('create new post with invalid data (negative scenario)', () => {
      cy.request({
        url: '/posts/1',
        method: 'POST',
        body: newPostNegative.create,
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        failOnStatusCode: false
      }).as("createPostNegative");

      cy.get("@createPostNegative").its("status")
        .should("equal", 404);
    })
  })
})
