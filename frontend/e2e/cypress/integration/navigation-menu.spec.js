import { ROUTE } from '../../../src/infrastructure/http/routes';

const INICIO = 'inicio';
const ACCEDER = 'acceder';
const REGISTRARSE = 'registrarse';

describe('Navigation menu', () => {

  beforeEach(() => {
    cy.visit(ROUTE.home);
  });

  it('verify navigation on Dashboard', () => {
    cy.contains(ACCEDER).should('contain', ACCEDER).click({ force: true });
    cy.url().should('include', ROUTE.loginRegister);

    cy.contains(INICIO).should('contain', INICIO).click({ force: true });
    cy.url().should('include', ROUTE.home);

    cy.contains(REGISTRARSE).should('contain', REGISTRARSE).click();
    cy.url().should('include', ROUTE.loginRegister);


  });

  it("can't contain double navbar repeating", () => {
    cy.get('.NavBar').within(()=>{
      cy.get('.LinkText').should('have.length', 3)
    });
  });

  it('verify render of menu mobil', () => {

    // lets see what our app looks like on a super small screen
    cy.viewport(320, 480);
    cy.get('a.LinkText').should('be', false);

    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999);
    cy.get('a.LinkText').should('be', true);

    // the change otherwise it is a little too fast to see :)
    cy.viewport('ipad-2');
    cy.wait(200);
    cy.get('.container').click();
    cy.contains(INICIO).should('contain', INICIO).click({ force: true });
    cy.url().should('include', ROUTE.home);

    cy.viewport('ipad-mini');
    cy.wait(200);
    cy.get('.container').click();
    cy.contains(ACCEDER).should('contain', ACCEDER).click({ force: true });
    cy.url().should('include', ROUTE.loginRegister);


    cy.viewport('iphone-6+');
    cy.wait(200);
    cy.get('.container').click();
    cy.contains(INICIO).should('contain', INICIO).click({ force: true });
    cy.url().should('include', ROUTE.home);

    cy.viewport('iphone-3');
    cy.wait(200);
    cy.get('.container').click();
    cy.contains(ACCEDER).should('contain', ACCEDER).click({ force: true });
    cy.url().should('include', ROUTE.loginRegister);


    // the default orientation is 'portrait'
    // cy.viewport('ipad-2', 'portrait');
    // cy.wait(200);
    cy.viewport('iphone-4', 'landscape');
    cy.wait(200);
    cy.get('.container').click();
    cy.contains(INICIO).should('contain', INICIO).click({ force: true });
    cy.url().should('include', ROUTE.home);
  });
});
