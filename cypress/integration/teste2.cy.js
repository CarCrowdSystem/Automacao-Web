/// <reference types="cypress"/>

describe('teste2', () => {
    it('testando', () => {
        cy.visit('https://www.youtube.com/')
        cy.wait(10000)
    })
})