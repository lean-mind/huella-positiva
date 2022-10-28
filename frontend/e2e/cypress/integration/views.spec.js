import { ROUTE } from '../../../src/infrastructure/http/routes';

describe('Views', () => {

  it('view how to see the client in different resize', () => {
    cy.visit(ROUTE.home);
    cy.url().should('include', ROUTE.home);

    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999);

    // the change otherwise it is a little too fast to see :)
    cy.viewport('macbook-15');
    cy.wait(200);
    cy.viewport('macbook-13');
    cy.wait(200);
    cy.viewport('macbook-11');
    cy.wait(200);
    cy.viewport('ipad-2');
    cy.wait(200);
    cy.viewport('ipad-mini');
    cy.wait(200);
    cy.viewport('iphone-6+');
    cy.wait(200);
    cy.viewport('iphone-6');
    cy.wait(200);
    cy.viewport('iphone-5');
    cy.wait(200);
    cy.viewport('iphone-4');
    cy.wait(200);
    cy.viewport('iphone-3');
    cy.wait(200);

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport('ipad-2', 'portrait');
    cy.wait(200);
    cy.viewport('iphone-4', 'landscape');
    cy.wait(200);
  });

});
