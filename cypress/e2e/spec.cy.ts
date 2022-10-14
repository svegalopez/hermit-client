describe('Basic', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.hc-header > .icon');
    // expect(true).to.be.true;
    // cy.get('.app').should('exist');
    // dummy
  });

  // it('logs in', () => {
  //   cy.visit('http://localhost:3000/hermit-client/login');
  //   cy.get('.app').find('input').type('Sebastian');
  //   cy.get('.app').find('button[app-role="login"]').click();
  //   cy.get('.welcome-heading').contains('Sebastian')
  // });
});

export default {}