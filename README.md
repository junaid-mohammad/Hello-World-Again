# Hello, World Again 📝

[![Deployed via GitHub Actions](https://img.shields.io/badge/Deployed%20via-GitHub%20Actions-blue?logo=github)](https://github.com/junaid-mohammad/Hello-World-Again)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://hello-world-again-akb5d9h6hme3ffcx.canadacentral-01.azurewebsites.net/)
[![Azure DevOps](https://img.shields.io/badge/Tracked%20in-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/Hello%20World%20Again)

This repository contains the source code for **Hello, World Again** — a personal blogging platform built to share life stories, reflections, and development updates in a professional yet approachable format. It was originally started as a university side project and has since evolved into a polished, production-ready portfolio piece. The project is built using **Node.js**, **Express**, **EJS templating** and **MongoDB**, with a focus on creating a clean, visually appealing, and user-friendly blogging platform.

> 💡 Deployed using GitHub Actions to Microsoft Azure. Azure DevOps retained for version control tracking.

---

## 🖥️ Live Website

👉 **[Live App](https://hello-world-again-akb5d9h6hme3ffcx.canadacentral-01.azurewebsites.net/)** (Azure App Service)  
👉 **[Old Version](https://blog-junaid.onrender.com)** (Render: Cloud Application Platform)  
📈 **[GitHub Repo](https://github.com/junaid-mohammad/Hello-World-Again)**  
📁 **[Azure DevOps Project for CI/CD](https://dev.azure.com/Junaid-Arif/Hello%20World%20Again)**

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
| CI/CD    | GitHub Actions + Azure DevOps           |
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

Here's the updated version of that section reflecting the switch to **GitHub Actions** for deployment while retaining **Azure DevOps** for tracking, and explaining the deployment issues just like we did for _Love Roulette_.

---

## 🚀 Deployment & Workflow

### 🛠 Deployment Overview

The **Hello, World Again** app is hosted on **Microsoft Azure App Service**, deployed via **GitHub Actions**, and version-controlled using both **GitHub** and **Azure DevOps**.

- **App Service URL**: [`hello-world-again`](https://hello-world-again-akb5d9h6hme3ffcx.canadacentral-01.azurewebsites.net/)
- **GitHub Repo**: [`Hello-World-Again`](https://github.com/junaid-mohammad/Hello-World-Again)
- **Azure DevOps**: [`Hello World Again`](https://dev.azure.com/Junaid-Arif/Hello%20World%20Again)

---

### 🔁 CI/CD & Secrets Management

| Step                   | Description                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `.env` setup           | Sensitive variables like `MONGODB_URI` are stored in `.env` (not pushed to GitHub) |
| `dotenv` config        | App reads from `.env` via `require('dotenv').config()`                             |
| Filter history rewrite | Previous commits scrubbed using `git filter-repo` with `--replace-text`            |
| GitHub primary remote  | All development pushed to GitHub for deployment                                    |
| Azure DevOps tracking  | Retained for version control and future CI/CD experimentation                      |

---

### 🛠 Deployment Setup (What Happened)

Initially, the app was configured to deploy using **Azure DevOps**, but persistent issues made deployment unreliable:

- Azure App Service failed to detect the `package.json` and `index.js` when connected to Azure Repos.
- CI/CD pipelines via Azure DevOps stalled or deployed only static fallback content (`hostingstart.html`).
- ZIP deployment and Kudu console workarounds also failed to reflect a working app in `/home/site/wwwroot`.

After significant debugging and cleanup, deployment was successfully migrated to **GitHub Actions**, which provided:

- Automatic YAML workflow generation
- Clear logs for build and deploy steps
- Seamless integration with Azure App Service
- Consistent and reliable live deployment

---

### 🛠 Deployment Setup (Steps We Took)

1. **Created Azure App Service**

   - Provisioned via Azure Portal:
     👉 [`hello-world-again`](https://hello-world-again-akb5d9h6hme3ffcx.canadacentral-01.azurewebsites.net)

2. **Created GitHub Repo**

   - Repo: [`Hello-World-Again`](https://github.com/junaid-mohammad/Hello-World-Again)
   - Used for both development and production deployment.

3. **Created Azure DevOps Project**

   - Project: [`Hello World Again`](https://dev.azure.com/Junaid-Arif/Hello%20World%20Again)
   - Used solely for source control tracking (not CI/CD).

4. **Added Azure DevOps as a Git Remote**

   ```bash
   git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Hello%20World%20Again/_git/Hello%20World%20Again
   ```

5. **Configured Azure App Service to Pull from GitHub**

   - Set up GitHub Actions in the Deployment Center with `main` branch.
   - Azure App Service now builds and deploys from GitHub commits.

6. **MongoDB URI Secured**

   - Removed from all commit history using `git filter-repo`.
   - Referenced via:

     ```javascript
     const port = process.env.PORT || 3000;
     mongoose.connect(process.env.MONGODB_URI);
     ```

7. **Validated Deployment**

   - Confirmed end-to-end build and deployment through GitHub Actions logs and live website.

---

### 🔥 Deployment Workflow (Current)

```bash
git add .
git commit -m "Your commit message"
git push origin main     # Triggers GitHub Actions and deploys to Azure
git push azure main      # Optional: pushes to Azure DevOps for backup/tracking
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
