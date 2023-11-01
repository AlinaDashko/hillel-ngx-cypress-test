describe("Posts", () => {
  it("should delete a post by ID", () => {
    const postIdToDelete = 1;

    cy.api({
      url: `/posts/${postIdToDelete}`,
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).as("deletePost");

    cy.get("@deletePost").its("status").should("equal", 200);
  });
});
