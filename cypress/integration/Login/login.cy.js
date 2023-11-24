/// <reference types="cypress"/>

import LoginStep from "../../support/steps/loginSteps"
const loginStep = new LoginStep()

describe('Login', () => {
    it('Entrar na plataforma com login valido', () => {
        loginStep.DadoQueEstejaNaPaginaDeLogin()
        loginStep.QuandoInserirEmailESenhaEClicarEmEntrar()
        loginStep.EntaoDeveSerRedirecionadoParaADashboardDoSite()
    })

    it('Entrar na plataforma com login invalido', () => {
        loginStep.DadoQueEstejaNaPaginaDeLogin()
        loginStep.QuandoInserirEmailESenhaInvalidoEClicarEmEntrar()
        loginStep.EntaoDeveAparecerUmModalDeEmailOuSenhaInvalido()
    })

})

