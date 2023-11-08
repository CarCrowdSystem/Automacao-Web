/// <reference types="Cypress" />

class TestePage {

    acessarSite() {
        cy.visit('https://www.youtube.com/')
        cy.wait(200000)
    }

}

export default TestePage