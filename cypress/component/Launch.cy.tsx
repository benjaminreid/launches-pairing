import Launch from '../../components/launch';
import launch from '../fixtures/launch.json';

describe('Launch', () => {
  beforeEach(() => {
    cy.mount(<Launch launch={launch} />);
  });

  it('it renders without error', () => {
    cy.get('[data-testid=title]').should('contain.text', 'FalconSat');
  });

  it('renders the date correctly', () => {
    cy.get('[data-testid=date]').should('contain.text', '24/03/2006');
  });

  it('renders the core', () => {
    cy.get('[data-testid=core]').should('contain.text', 'Merlin1A');
  });

  it('renders the payload', () => {
    cy.get('[data-testid=payload]').should('contain.text', 'Satellite: FalconSAT-2');
  });
});
