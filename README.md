# DevOps Task: Containerized Node.js Web Application with CI/CD

## Project Overview
This project demonstrates a complete DevOps workflow for a simple Node.js application, including:
- Containerization with Docker
- CI/CD pipeline using GitHub Actions
- Cloud deployment on **Google Cloud Platform (GCP)** and **GitHub Codespaces**

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Jay2006sawant/Devops_Task.git
cd Devops_Task
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Docker Instructions

### 1. Build Docker Image
```bash
docker build -t jay-nodejs-app .
```

### 2. Run Docker Container
```bash
docker run -p 3000:3000 jay-nodejs-app
```

---

## CI/CD Pipeline (GitHub Actions)
- The workflow is defined in `.github/workflows/`.
- On every push to `main`, the pipeline:
  1. Builds the Docker image
  2. Runs a basic test (health check)
  3. Deploys to the VM (if configured)

---

## Deployment
- The application was deployed on **Google Cloud Platform (GCP)** and tested in **GitHub Codespaces**.
- For GCP:
  1. Created a VM instance on Google Compute Engine.
  2. Installed Docker on the VM.
  3. Pulled and ran the Dockerized app on the VM.
  4. Opened port 3000 (or 80) in the firewall/security group for external access.
- For Codespaces:
  1. Opened the repository in GitHub Codespaces.
  2. Ran `npm install` and `npm start` to launch the app in the cloud development environment.
- The CI/CD pipeline can be used to deploy the Dockerized app to your VM or Codespace.

---

## Documentation

### Steps Followed
1. Forked and set up a starter Node.js app.
2. Wrote a Dockerfile to containerize the app.
3. Built and tested the Docker container locally.
4. Pushed code and Dockerfile to GitHub.
5. Configured GitHub Actions for CI/CD.
6. Created a VM and installed Docker.
7. Deployed the app using the pipeline.
8. Deployed and tested on GCP and GitHub Codespaces.

### Problems Faced & Solutions
- **npm install error:** Fixed by running commands in the correct directory (`Devops_Task`).
- **Port issues:** Ensured port 3000 was open on the VM and in Docker run command.
- **CI/CD secrets:** Added SSH keys as GitHub secrets for deployment.

---

## Author
Jay Sawant 