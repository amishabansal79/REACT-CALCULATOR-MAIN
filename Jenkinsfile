pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the project...'
                    // Your build steps like npm install or yarn install
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    // Your test steps like npm test or yarn test
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying the project...'
                    // Your deploy steps like Vercel deploy or Docker build
                }
            }
        }
    }
}
