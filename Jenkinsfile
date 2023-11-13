pipeline {     
    agent any     
    stages {         
        stage('Install Dependencies') {             
            steps {                 
                    script {                     
                        sh 'npm install'                 
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
