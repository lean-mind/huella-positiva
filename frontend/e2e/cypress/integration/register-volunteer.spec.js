import { ROUTE } from '../../../src/infrastructure/http/routes';

describe('Volunteer should', () => {
  const VOLUNTEER = {
    email: 'test@test.com',
    password: 'aLongPassword',
  };

  beforeEach(() => {
    const COMMAND_TO_DROP_INFO_CREDENTIALS_TABLE = 'docker exec local_huellapositiva_database_1 psql -U root -d huellapositiva -c "TRUNCATE credentials CASCADE"';
    cy.exec(COMMAND_TO_DROP_INFO_CREDENTIALS_TABLE)
      .its('stdout').should('contain', 'TRUNCATE TABLE');
  });

  it('open the web', () => {
    cy.visit(ROUTE.loginRegister);
  });

  it('verify resend to email confirmation page when the form is good way', () => {
    cy.registerVolunteer(VOLUNTEER);

    cy.url().should('include', ROUTE.email.confirmation);
    cy.get('p').should('contain', 'reenviar correo');
  });

  it('registered email should be changed after notified that it already exist', () => {
    cy.registerVolunteer(VOLUNTEER);
    cy.registerVolunteer(VOLUNTEER);

    cy.url().should('include', '/');
    cy.get('p').should('contain', 'Email ya registrado');

    // Now changed the input after notify user already exist
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]').type('another' + VOLUNTEER.email);
    cy.get('button[type=submit]').click();

    cy.url().should('include', ROUTE.email.confirmation);
    cy.get('p').should('contain', 'reenviar correo');
  });

  it('verify to cookies accessToken and refreshToken saved on window cookies', () => {
    cy.clearCookies();
    cy.registerVolunteer(VOLUNTEER);
    cy.get('div .resend-container');

    cy.getCookies()
      .should('have.length', 2)
      .then((cookies) => {
        const accessTokenCookie = cookies[0];
        expect(accessTokenCookie).to.have.property('name', 'accessToken');
        expect(accessTokenCookie).to.have.property('path', '/');
        // TODO: Uncomment this line when enable httpOnly
        // expect(accessTokenCookie).to.have.property('httpOnly', 'true');

        const refreshTokenCookie = cookies[1];
        expect(refreshTokenCookie).to.have.property('name', 'refreshToken');
        expect(refreshTokenCookie).to.have.property('path', '/');
        // TODO: Uncomment this line when enable httpOnly
        // expect(refreshTokenCookie).to.have.property('httpOnly', 'true');
      });
  });
});
