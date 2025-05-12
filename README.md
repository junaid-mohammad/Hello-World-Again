# Hello, World Again 📝

[![Azure DevOps](https://img.shields.io/badge/Tracking-Azure%20DevOps-blue?logo=azuredevops)](https://dev.azure.com/Junaid-Arif/Hello%20World%20Again)
[![Azure App Service](https://img.shields.io/badge/Hosted-Azure%20App%20Service-brightgreen?logo=windows)](https://hello-world-again-akb5d9h6hme3ffcx.canadacentral-01.azurewebsites.net/)
[![GitHub Repo](https://img.shields.io/badge/Source-GitHub-black?logo=github)](https://github.com/junaid-mohammad/Hello-World-Again)

This repository contains the source code for **Hello, World Again** — a personal blogging platform built to share life stories, reflections, and development updates in a professional yet approachable format. It was originally started as a university side project and has since evolved into a polished, production-ready portfolio piece. The project is built using **Node.js**, **Express**, **EJS templating** and **MongoDB**, with a focus on creating a clean, visually appealing, and user-friendly blogging platform.

---

## 🖥️ Live Website

👉 **[Live App](https://hello-world-again-akb5d9h6hme3ffcx.canadacentral-01.azurewebsites.net/)** (Azure App Service)  
👉 **[Old Version](https://blog-junaid.onrender.com)** (Render: Cloud Application Platform)  
📈 **[Azure DevOps Project for CI/CD](https://dev.azure.com/Junaid-Arif/Hello%20World%20Again)**  
📁 **[GitHub Repo](https://github.com/junaid-mohammad/Hello-World-Again)**

---

## 🎯 Purpose

This Project was initially created during my second year at McGill to document my professional growth, extracurricular involvements, and side projects. Over time, I restructured and modernized the blog to improve its design, user experience, and functionality. The primary goals of this project were to:

- Share stories, reflections, and updates — both personal and technical.
- Learn and apply full-stack web development (Node.js + Express + MongoDB).
- Deploy with real-world DevOps pipelines and cloud infrastructure.
- Create a user-friendly, responsive, and professionally styled interface.
- Serve as a real deployment of form submissions, CRUD flows, and page templating.

---

## 🛠️ Features

- ✅ **Dynamic Blog Feed** from a MongoDB database.
- ✏️ **Compose New Post** interface with validations.
- 📄 **View Full Post** on unique dynamic URL routes.
- 📬 **Contact Form** with live success feedback.
- 🌊 **Wave Animations** for a modern aesthetic.
- 🖼️ **Responsive Design** — mobile and desktop friendly.
- 🧼 **Secure Deployment** with environment variables (no secrets in codebase).
- 🔥 **Full Secret History Rewrite** using `git filter-repo` to remove leaked MongoDB URI.

---

## 💻 Technologies Used

| Layer    | Stack                                   |
| -------- | --------------------------------------- |
| Backend  | Node.js, Express, Mongoose              |
| Frontend | EJS, HTML5, CSS3, Bootstrap             |
| Database | MongoDB Atlas                           |
| Hosting  | Azure App Service                       |
| CI/CD    | Manual GitHub Deploy + Azure DevOps     |
| Security | `.env` files for secrets (via `dotenv`) |

> ℹ️ The project uses **CommonJS modules** (`require`) instead of ES6 modules (`import`), so `"type": "module"` is intentionally omitted from `package.json`.

---

## 🧠 What I Learned

- Safely managing **environment variables** with `.env`.
- Using **MongoDB Atlas** and **Mongoose schemas** effectively.
- Building RESTful routes using Express and route params.
- Structuring a **real-world production-level Node app**.
- Using `git filter-repo` to **permanently remove sensitive data**.
- Understanding the difference between `origin`, `azure`, and clean filtered pushes.
- Azure DevOps project management + App Service configuration.

---

## 🚀 Deployment & Workflow

### 🛠 Deployment Overview

- **App Service URL**: [hello-world-again](https://hello-world-again-akb5d9h6hme3ffcx.canadacentral-01.azurewebsites.net/)
- **GitHub Repo**: [`Hello-World-Again`](https://github.com/junaid-mohammad/Hello-World-Again)
- **Azure DevOps Project**: [`Hello World Again`](https://dev.azure.com/Junaid-Arif/Hello%20World%20Again)

---

### 🔁 CI/CD & Secrets Management

| Step                   | Description                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `.env` setup           | Sensitive variables like `MONGODB_URI` are stored in `.env` (not pushed to GitHub) |
| `dotenv` config        | App reads from `.env` via `require('dotenv').config()`                             |
| Filter history rewrite | Previous commits scrubbed using `git filter-repo` with `--replace-text`            |
| GitHub primary remote  | All development pushed to GitHub                                                   |
| Azure DevOps tracking  | Kept for backup and version control transparency                                   |

---

## 🚀 Deployment & Workflow

The **Hello, World Again** app is hosted on **Microsoft Azure App Service** and deployed using **Azure DevOps**, with code managed on **GitHub** for redundancy and version tracking.

---

### 🛠 Deployment Setup

The application uses a **single Azure App Service** for hosting, with CI/CD managed manually via Azure DevOps. GitHub is linked as a secondary remote for version control history and backup.

---

### 🛠 Deployment Setup (Steps We Took)

1. **Created Azure App Service**

   - Set up a new App Service instance via Azure Portal:
     👉 [hello-world-again](https://hello-world-again-akb5d9h6hme3ffcx.canadacentral-01.azurewebsites.net)

2. **Created GitHub Repo**

   - Repository: [`Hello-World-Again`](https://github.com/junaid-mohammad/Hello-World-Again)
   - Initialized a local project and pushed all files to GitHub.

3. **Created Azure DevOps Project**

   - Project: [`Hello World Again`](https://dev.azure.com/Junaid-Arif/Hello%20World%20Again)
   - Set up for source control tracking (not active deployment).

4. **Added Azure DevOps as a Git Remote**

   - Used the following command to register Azure as a secondary remote:

     ```bash
     git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Hello%20World%20Again/_git/Hello%20World%20Again
     ```

5. **Push to Both Remotes**

   - Code is pushed to both GitHub and Azure DevOps for visibility and traceability:

     ```bash
     git push origin main
     git push azure main
     ```

6. **Configured Azure App Service to Pull from Azure DevOps Repo**

   - In the App Service Deployment Center, linked the Azure DevOps repo for Continuous Deployment (CI/CD).
   - `.env` variables such as `MONGODB_URI` are set through the App Service Configuration tab.

7. **MongoDB URI Secured**

   - Removed all secrets from the repository history using `git filter-repo`.
   - App securely references credentials via:

     ```javascript
     const port = process.env.PORT || 3000;
     mongoose.connect(process.env.MONGODB_URI);
     ```

8. **Tested Deployment Workflow**

   - Validated successful builds and live deployment via the Azure Dashboard.

---

### 🔥 Deployment Workflow (Current)

Whenever code changes are made:

```bash
git add .
git commit -m "Your commit message"
git push origin main     # Pushes to GitHub and deploys via GitHub Integration
git push azure main      # Mirrors changes to Azure DevOps
```

---

## 🧹 Secret Cleanup Note

This repo previously contained a hardcoded MongoDB URI. It has now been:

- **Removed from all commits** via `git filter-repo`
- **Confirmed gone via `git grep` & GitHub Code Search**
- **Replaced in code with `process.env.MONGODB_URI`**

**MongoDB credentials have been rotated.**

---

## 🤝 Contribution

Feel free to fork, clone, or submit a pull request. If you have ideas for better UI, animations, or backend workflows — contributions are welcome!

---

## 📄 License

This project is open-source and available for educational or personal use. Attribution is appreciated.

---

## ✨ Credits

Built with ☕ by **Junaid Arif**, Computer Engineering @ McGill.
From debugging life to documenting it — this is Hello, World Again.
