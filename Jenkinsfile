pipeline {     
    agent any 
    tools {
        git 'Git'
    }    
    stages {         
        stage('Install Dependencies') {             
            steps {                 
                script {                     
                    nodejs(nodeJSInstallationName: 'Node12', configId: 'sua-configuracao-nodejs') {                         
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
