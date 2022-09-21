describe('Basic', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('.app').should('exist');
  })
});

export default {}