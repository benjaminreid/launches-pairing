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

  it('should show error state when API is broken', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://api.spacexdata.com/v3/launches', {
      statusCode: 500,
    }).as('api');

    cy.wait('@api');

    cy.get('[data-testid=error]').should('contain.text', 'Oops, we couldn’t load launch list');
  });
});
