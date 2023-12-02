class LoginElements {

    paginaLogin = () => {
        return cy.visit('https://ccs-grupo7.ddnsking.com/login')
    }

    inputEmail = () => {
        return cy.get('input[name="emailEmpresa"]').should('be.visible')
    }

    inputSenha = () => {
        return cy.get('input[name="senhaEmpresa"]').should('be.visible')
    }

    botaoEntrar = () => {
        return cy.get('button[class="btn-entrar-login"]').should('be.visible')
    }

    tituloDashboard = () => {
        return cy.contains('Dashboard', {timeout:10000}).should('be.visible')
    }

    textoEmailOuSenhaInvalido = () => {
        return cy.contains('E-mail ou senha inválidos!', {timeout:10000}).should('be.visible')
    }

}

export default LoginElements