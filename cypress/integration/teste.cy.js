/// <reference types="cypress"/>

describe('teste', () => {
    it('testando', () => {
        cy.visit('https://www.youtube.com/')
        cy.wait(10000)
    })
})