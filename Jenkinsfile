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
                bat 'npm install'
            }
        }
        
      stage('Build'){
            steps {
                bat 'npm install pm2 -g'
            }
        }
        
        stage('Deploy'){
            steps {
                bat 'pm2 startOrRestart pm2.config.json'
            }
        }
    }
}
