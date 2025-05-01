pipeline {
    agent any

    environment {
        // Define the environment variable for Docker image name
        DOCKER_IMAGE = "frontend:v1"
        DOCKER_COMPOSE_PATH = "./docker-compose.yml"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository code
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using Docker Compose
                    echo 'Building Docker image...'
                    sh 'docker-compose -f $DOCKER_COMPOSE_PATH build'
                }
            }
        }

        stage('Run Docker Compose') {
            steps {
                script {
                    // Run the services using Docker Compose
                    echo 'Starting services using Docker Compose...'
                    sh 'docker-compose -f $DOCKER_COMPOSE_PATH up -d'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Add your test commands here, if applicable
                    echo 'Running tests (if any)...'
                    // Example: Run Cypress tests or unit tests
                }
            }
        }

        stage('Stop Docker Compose') {
            steps {
                script {
                    // Shut down the Docker containers once tests or deployment are complete
                    echo 'Stopping Docker containers...'
                    sh 'docker-compose -f $DOCKER_COMPOSE_PATH down'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    // Optionally, clean up unused Docker images and volumes
                    echo 'Cleaning up Docker images...'
                    sh 'docker system prune -f'
                }
            }
        }
    }

    post {
        always {
            // Clean up any resources or print logs regardless of success/failure
            echo 'Cleaning up and logging out...'
        }
    }
}
