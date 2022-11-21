import Error from '../../components/error';

describe('Error', () => {
  it('it renders error text', () => {
    cy.mount(<Error>Oops something went wrong</Error>);
    cy.get('div').should('contain.text', 'Oops something went wrong');
  });
});
