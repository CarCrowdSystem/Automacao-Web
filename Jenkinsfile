pipeline {
   agent any

   tools {nodejs "Node12"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm i'
           }
       }
       stage('e2e Tests') {
            steps {
                sh 'npm run cypress'
                  }
               }
             
       stage('Deploy') {
           steps {
               echo 'Deploying....'
           }
       }
   }
}