# DevOps Task: Containerized Node.js Web Application with CI/CD

## Live Demo

The application is live at:  
[http://34.27.69.25/](http://34.27.69.25/)

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

1. **Project Setup**
   - Forked and set up a starter Node.js app.
   - Wrote a Dockerfile to containerize the app.
   - Built and tested the Docker container locally.
   - Pushed code and Dockerfile to GitHub.

2. **CI/CD Pipeline**
   - Configured GitHub Actions for automated build, test, and deployment.

3. **Cloud Deployment**
   - Created a VM instance on Google Cloud Platform (GCP).
   - Installed Docker on the VM.
   - Deployed the app using the pipeline and manual Docker commands.
   - Deployed and tested on GCP and GitHub Codespaces.

4. **Network Configuration**
   - Added a firewall rule to allow TCP traffic on port 80 (HTTP) in GCP.

---

### Problems Faced & Solutions

- **npm install error:**
  - *Problem:* Running `npm install` in the wrong directory.
  - *Solution:* Ensured commands were run in the correct project directory (`Devops_Task`).

- **Port issues:**
  - *Problem:* App not accessible due to closed ports.
  - *Solution:* Opened port 3000 in Docker and port 80 in the VM firewall.

- **App not accessible from browser:**
  - *Problem:* Could not access the app via the public IP.
  - *Solution:* Added a GCP firewall rule to allow ingress on TCP:80 from `0.0.0.0/0`.

- **CI/CD secrets:**
  - *Problem:* Securely managing deployment keys.
  - *Solution:* Added SSH keys as GitHub secrets for deployment automation.

---

## Author
Jay Sawant 