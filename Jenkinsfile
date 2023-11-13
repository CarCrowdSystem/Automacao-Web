pipeline {     
    agent any     
    stages {         
        stage('Install Dependencies') {             
            steps {                 
                script {                     
                    nodejs(nodeJSInstallationName: 'NomeDaSuaInstalacaoNodeJS', configId: 'sua-configuracao-nodejs') {                         
                        sh 'npm install'                     
                        }                 
                    }             
                }         
            }         
            stage('Run Tests') {             
                steps {                 
                    script {                     
                        sh './node_modules/.bin/cypress run'                 
                        }             
                    }         
                }         
                stage('Cucumber Reports') {             
                    steps {                 
                        script {                     
                            cucumber 'cypress/reports/json/*.json'                 
                        }             
                    }         
                }     
            }     
            post {         
                always {             
                    cucumber 'cypress/reports/json/*.json'         
                }     
        } 
}
