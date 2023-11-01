describe('GET posts list', () => {
  it('should return a list of posts', () => {
    cy.api({
      url: '/posts',
      method: 'GET',
    })
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.above(0);

        response.body.forEach((post) => {
          expect(post).to.have.property('userId');
          expect(post).to.have.property('id');
          expect(post).to.have.property('title');
          expect(post).to.have.property('body');
        });
      });
  });

  it('should handle negative scenarios', () => {
    cy.api({
      url: 'https://jsonplaceholder.typicode.com/invalid-url',
      method: 'GET',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(404);
      });
  });
});
