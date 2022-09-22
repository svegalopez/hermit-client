describe('Basic', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/hermit-client');
    cy.get('.app').should('exist');
  });

  it('logs in', () => {
    cy.visit('http://localhost:3000/hermit-client/login');
    cy.get('.app').find('input').type('Sebastian');
    cy.get('.app').find('button[role="login"]').click();
    cy.get('.welcome-heading').contains('Sebastian')
  });
});

export default {}