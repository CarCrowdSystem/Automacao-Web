import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

import TestePage from '../../pageobject/testePage'
const testePage = new TestePage()

Given('testando projeto', () => {
    testePage.acessarSite()
})