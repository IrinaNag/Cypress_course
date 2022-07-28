/// <reference types="Cypress"/>

it('type', () => {
    cy.visit('/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type(112233344);
})

it('focus', () => {
    cy.visit('/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus();
})

it('blur', () => {
    cy.visit('/mobile?lang=en')
        .get('[data-qa-node="numberdebitSource"]')
        .focus()
        .blur();
})

it('clear', () => {
    cy.visit('/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .type(999)
        .wait(2000)
        .clear();
})

it('submit', () => {
    cy.visit('/mobile?lang=en')
        .get('form[method="post"]')
        .submit();
})

it('click', () => {
    cy.visit('/mobile?lang=en')
        .get('[data-qa-node="debitSourceSource"]')
        .click();
})

it('rightClick', () => {
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')
        .rightclick();
})

it.only('doubleClick', () => {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
        .contains('My Card')
        .dblclick();
})