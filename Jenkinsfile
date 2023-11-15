pipeline{
    agent any

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo "Building application"
            }
        }
        stage('Testing'){
            steps{
                sh "npm i"
                sh "npx cypress run --browser chrome --spec cypress/integration/**/**"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the application"
            }
        }
    }

    post{
            always {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
}