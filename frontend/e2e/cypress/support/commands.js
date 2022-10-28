// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


import { ROUTE } from '../../../src/infrastructure/http/routes';

Cypress.Commands.add('typeRegisterVolunteer', (volunteer) => {
  cy.get('input[name=email]')
    .type(volunteer.email);
  cy.get('input[name=password]')
    .type(volunteer.password);
  cy.get('input[name=repeatedPassword]')
    .type(volunteer.password);
});

Cypress.Commands.add('registerVolunteer', (volunteer) => {
  cy.visit(ROUTE.loginRegister);
  cy.get('button[aria-label=register-button]').click();
  cy.get('input[name=email]')
    .type(volunteer.email);
  cy.get('input[name=password]')
    .type(volunteer.password);
  cy.get('input[name=repeatedPassword]')
    .type(volunteer.password);
  cy.get('button[type=submit]').click();
});
