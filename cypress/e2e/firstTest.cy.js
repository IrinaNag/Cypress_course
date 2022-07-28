/// <reference types="Cypress"/>

it('check is button attr correct', () => {
    cy.visit('?lang=en');
    cy.contains('Show cards')
        .should('have.attr', 'type')
        .and('match', /button/);
})

it.only('check is URL correct', () => {
    cy.visit('?lang=en');
    cy.url()
        .should('eq', 'https://next.privat24.ua/?lang=en');
})


