/// <reference types="Cypress"/>

// describe('Mobile phone replenishment', () => {

//   it('Check min sum', () => {
//     //
//   })

// })

//!!!Comment

it('Using Get with Find and Eq', () => {

  cy.visit('/deposit/open');
  //cy.get('tbody').find('tr').eq(0).find('td').eq(7);
  cy.get('tbody').find('td').find('button').eq(0);

})

it.only('Using Get with Find and Eq', () => {

  cy.viewport(1920, 1080);
  cy.visit('https://docs.cypress.io/api/commands/eq');
  cy.get('main').find('nav').find('li').find('a').eq(0);

})