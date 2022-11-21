describe('Launch list', () => {
  it('loads 10 launches from the SpaceX API', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=launches]').find('> div').should('have.length', 10);
  });

  it('should intially show loading state', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=loading]').should('exist');
    cy.get('[data-testid=loading]').should('not.exist');
  });
});
