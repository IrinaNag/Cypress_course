/// <reference types="Cypress"/>

it('', () => {
    cy.visit('/mobile?lang=en');
    cy.contains('Sign in');
})

it('', () => {
    cy.visit('/mobile?lang=en');
    cy.contains('div', 'Sign in');
})

it.only('', () => {
    cy.visit('/mobile?lang=en');
    cy.contains('div', 'SIGN IN', {matchCase: false});
})