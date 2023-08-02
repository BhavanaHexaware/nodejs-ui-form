pipeline{
    agent any
    tools {nodejs "Nodejs"}
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'main',
                url: 'https://github.com/BhavanaHexaware/nodejs-ui-form.git'
            }
        }
        
        stage('Install'){
            steps {
                sh 'npm install'
            }
        }
        
       stage('Test') {
          steps {
            sh 'node test'
          }
        }
    }
}
