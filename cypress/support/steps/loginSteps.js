import LoginPage from "../pageobject/loginPage";
const loginPage = new LoginPage()

var loginValido = 'testeqaccs@gmail.com'
var senhaValida = 'testeqaccs1210'
var loginInvalido = 'testeqaccs'
var senhaInvalida = 'testeqaccs'

class LoginStep{

    DadoQueEstejaNaPaginaDeLogin(){
        loginPage.acessarPaginaLogin()
    }

    QuandoInserirEmailESenhaEClicarEmEntrar(){
        loginPage.digitarEmail(loginValido)
        loginPage.digitarSenha(senhaValida)
        loginPage.clicarEmEntrar()
    }

    QuandoInserirEmailESenhaInvalidoEClicarEmEntrar(){
        loginPage.digitarEmail(loginInvalido)
        loginPage.digitarSenha(senhaInvalida)
        loginPage.clicarEmEntrar()
    }

    EntaoDeveSerRedirecionadoParaADashboardDoSite(){
        loginPage.validarTituloDash()
    }

    EntaoDeveAparecerUmModalDeEmailOuSenhaInvalido(){
        loginPage.validarTextoEmailOuSenhaInvalido()
    }

}

export default LoginStep