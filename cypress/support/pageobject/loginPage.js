import LoginElements from "../elements/loginElements";

const loginElements = new LoginElements()

class LoginPage {

    acessarPaginaLogin() {
        loginElements.paginaLogin()
    }

    digitarEmail(emailUsuario) {
        loginElements.inputEmail().type(emailUsuario)
    }

    digitarSenha(senhaUsuario) {
        loginElements.inputSenha().type(senhaUsuario)
    }

    clicarEmEntrar() {
        loginElements.botaoEntrar().click()
    }

    validarTituloDash() {
        loginElements.tituloDashboard()
    }

    validarTextoEmailOuSenhaInvalido() {
        loginElements.textoEmailOuSenhaInvalido()
    }

}

export default LoginPage