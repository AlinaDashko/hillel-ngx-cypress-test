describe("Posts", () => {
  it('should return a post by ID', () => {
    const post = {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };


    cy.api({
      url: `/posts/${post.id}`,
      method: 'GET',
    }).as("getPost");

    cy.get("@getPost").its("status")
      .should("eq", 200);

    cy.get("@getPost").its("body.id")
      .should("eq", post.id);

    cy.get("@getPost").its("body.userId")
      .should("eq", post.userId);

    cy.get("@getPost").its("body.title")
      .should("eq", post.title);

    cy.get("@getPost").its("body.body")
      .should("eq", post.body);


    cy.api({
      url: `/posts/${post.id}`,
      method: 'POST',
      failOnStatusCode: false,
    }).as("getPostNegative");

    cy.get("@getPostNegative").its("status")
      .should("not.eq", 200);
  });
});
