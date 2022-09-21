describe('Basic', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/hermit-client');
    cy.get('.app').should('exist');
  })

  it('it should render a welcome heading', () => {
    cy.visit('http://localhost:3000/hermit-client');
    cy.get('.app').find('h1').contains('Welcome');
  })
});

export default {}