import { formatDate } from '../../../helpers/format';
import { get } from '../../../helpers/api';

describe('Helpers', () => {
  context('format', () => {
    it('formats dates correctly', () => {
      expect(formatDate('2006-03-24T22:30:00.000Z')).to.eq('24/03/2006');
    });
  });

  context('get', () => {
    it('gets data from an API', () => {
      cy.intercept('GET', 'http://example.com/json', {
        body: {
          foo: 'bar',
        },
      }).as('example');

      get('http://example.com/json')();

      cy.wait('@example').then((interception) => {
        expect(interception.response.body).to.deep.eq({ foo: 'bar' });
      });
    });
  });
});
