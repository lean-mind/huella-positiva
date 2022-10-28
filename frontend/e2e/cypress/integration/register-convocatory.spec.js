import { ROUTE } from '../../../src/infrastructure/http/routes';

describe('Convocatory register should', () => {
  const CONVOCATORY = {
    title: 'Recogida de residuos: Igueste de San Andres',
    description:
      'Se requieren voluntarios/as para colaborar con un grupo de recogida de residuos en la playa de Igueste de San Andrés. Se organizaran varios grupos a los que se les proporcionarán bolsas y guantes para la recogida de todo tipo de residuos.',
    photo:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa2%2FIgueste_de_San_Andr%25C3%25A9s._principal.jpg&f=1&nofb=1',
    city: 'Santa Cruz de Tenerife',
    localization: 'Igueste de San Andrés',
    agesRange: '16-30',
    startDay: '10/06/2020',
    finishDay: '10/06/2020',
  };

  it('open the web', () => {
    cy.visit(ROUTE.convocatories.register);
    cy.url().should('include', ROUTE.convocatories.register);
  });

  it('registered email should be changed after notified that it already exist', () => {
    cy.visit(ROUTE.convocatories.register);
    cy.url().should('include', ROUTE.convocatories.register);

    cy.get('input[name=title]').type(CONVOCATORY.title);
    cy.get('input[name=description]').type(CONVOCATORY.description);
    cy.get('select[name=agesRangeMin]').select('23');
    cy.get('select[name=agesRangeMax]').select('50');
    cy.get('select[name=city]').select('Arona');
    cy.get('select[name=localization]').select('Prueba 3');
    cy.get('input[name=startDay]').type('2020-08-23')
    cy.get('input[name=finishDay]').type('2020-09-04')

    cy.get('button[type=submit]').click();
  });
});
