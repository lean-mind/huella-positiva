import { ROUTE } from '../../../src/infrastructure/http/routes';

describe('Volunteer should', () => {
  const VOLUNTEER = {
    email: 'test@test.com',
    password: 'aLongPassword',
    wrongPassword: 'wrongPassword',
  };

  it('open the web and register a default user', () => {
    cy.visit(ROUTE.loginRegister);

    // Clean database
    const COMMAND_TO_DROP_INFO_CREDENTIALS_TABLE = 'docker exec local_huellapositiva_database_1 psql -U root -d huellapositiva -c "TRUNCATE credentials CASCADE"';
    cy.exec(COMMAND_TO_DROP_INFO_CREDENTIALS_TABLE)
      .its('stdout').should('contain', 'TRUNCATE TABLE');

    // Register a default user test
    cy.registerVolunteer(VOLUNTEER);
    cy.url().should('include', ROUTE.email.confirmation);
    cy.get('p').should('contain', 'reenviar correo');
    cy.contains('Volver al inicio').click();
    cy.url().should('include', ROUTE.home);

    // Logout
    cy.contains('desconectar').click();
    cy.getCookies().should('have.length', 0);
  });

  it('login a user successfully', () => {
    cy.visit(ROUTE.loginRegister);
    cy.get('input[name=email]').type(VOLUNTEER.email);
    cy.get('input[name=password]').type(VOLUNTEER.password);
    cy.get('button[type=submit]').click();

    cy.get('section');
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

  it('login with wrong credentials print a message of error', () => {
    cy.visit(ROUTE.loginRegister);
    cy.get('input[name=email]').type(VOLUNTEER.email);
    cy.get('input[name=password]').type(VOLUNTEER.wrongPassword);
    cy.get('button[type=submit]').click();
    cy.get('p').should('contain', 'mal');
  });
});
