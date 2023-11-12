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
         Parallel{
             stage('Test 1') {
                  steps {
                sh 'npm run cypress:ci'
                  }
               }
             
             stage('Test 2') {
                  steps {
                sh 'npm run cypress2:ci'
                  }
               }

       }
       stage('Deploy') {
           steps {
               echo 'Deploying....'
           }
       }
   }
}