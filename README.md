# Personal Blog

This repository contains the source code for my **Personal Blog**, a platform designed to share my journey, experiences, and insights throughout my time at McGill University and beyond. The project is built using **Node.js**, **Express**, **EJS templating** and **MongoDB**, with a focus on creating a clean, visually appealing, and user-friendly blogging platform.

---

## 🖥️ Live Website

You can access the live version of the Personal Blog here:  
👉 **[Personal Blog](https://persoanl-blog-fcgbauhzase4hkhd.canadacentral-01.azurewebsites.net/)** Hosted on Microsoft Azure

Old version of the Website can be found here: 👉 **[Personal Blog](https://blog-junaid.onrender.com)**

Link to **[Azure Project](https://dev.azure.com/Junaid-Arif/Personal%20Blog)**

---

## 🎯 Purpose

The **Personal Blog Project** was initially created during my second year at McGill to document my professional growth, extracurricular involvements, and side projects. Over time, I restructured and modernized the blog to improve its design, user experience, and functionality. The primary goals of this project were to:

- Practice **backend development** using **Node.js** and **Express**.
- Implement **EJS templating** to dynamically render pages with personalized content.
- Explore **MongoDB** for managing blog posts in a database.
- Enhance the blog's **front-end design** with **HTML/CSS**, including custom wave animations.
- Deploy the project on **Microsoft Azure App Service**.

Additionally, this project served as a way to reflect on my journey and personal growth while learning valuable web development skills.

---

## 🛠️ Features

- **Home Page with Dynamic Blog Posts**: The home page displays all blog posts stored in the **MongoDB database**. Each post is dynamically rendered using **EJS**.
- **Compose Page**: Users can create new blog posts through a user-friendly form. Posts are saved to the database and displayed on the home page.
- **Individual Blog Post Pages**: Each blog post has its own dedicated page with a unique URL, making it easy to share and reference specific entries.
- **About and Contact Pages**: Static pages to provide more context about the blog and a way for users to get in touch.
- **Contact Form with Thank-You Message**: A simple form to capture user messages, with a dynamic thank-you message displayed on the same page after submission.
- **Responsive Design**: The blog is fully responsive and works smoothly across desktops, tablets, and smartphones.
- **Custom Styling with Wave Animations**: The front-end design includes elegant wave animations and a modern color palette to enhance the user experience.

---

## 💻 Technologies Used

- **Node.js**: Backend runtime environment for building server-side applications.
- **Express**: Framework for building web applications and APIs.
- **EJS (Embedded JavaScript)**: Used for dynamic page rendering.
- **MongoDB**: Database used to store and manage blog posts.
- **Body-Parser**: Middleware to handle form data submissions.
- **HTML/CSS**: Used to create and style the front-end pages.
- **Microsoft Azure App Service**: Used for deploying and hosting the web app.

---

## 🧩 What I Learned

- **Dynamic Routing and Templating**: Practiced creating **dynamic routes** and **HTTP request handlers** with **Express**, along with **EJS templating** for personalized page rendering.
- **Database Management with MongoDB**: Gained experience in working with **MongoDB** for storing and retrieving data, including using **Mongoose** to define schemas and models.
- **Form Handling and Validation**: Learned to handle form submissions securely and dynamically render thank-you messages without redirecting to a new page.
- **Front-End Design Improvements**: Improved my front-end design skills by adding **wave animations**, **modern color schemes**, and **responsive layouts**.
- **Azure App Deployment**: Explored deploying a full-stack web app on **Microsoft Azure App Service**, managing configurations and environment variables for seamless deployment.

---

## 🚀 Deployment & Workflow

The **Personal Blog** app is hosted on **Microsoft Azure App Service** and deployed using **Azure DevOps**, with code managed on **GitHub**.

### 🛠 Deployment Setup

The **Personal Blog** app is hosted on **Microsoft Azure App Service** with the code managed across **GitHub** and **Azure DevOps**.

### 🛠 Deployment Setup (Steps We Took)

1. **Created Azure App Service**

   * Set up a new App Service instance through the Azure portal.

2. **Created GitHub Repo**

   * Initialized a new GitHub repository (`Personal-Blog`) and pushed all project files to it.

3. **Created Azure DevOps Project**

   * Created a project called *Personal Blog* in Azure DevOps.

4. **Added Azure DevOps as a Git Remote**

   * Used the following to connect local code to Azure DevOps:

     ```bash
     git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Personal%20Blog/_git/Personal%20Blog
     ```

5. **Push to Both Remotes**

   * Pushed the same codebase to both GitHub (`origin`) and Azure DevOps (`azure`):

     ```bash
     git push origin main
     git push azure main
     ```

6. **Configured Azure App Service to Pull from Azure DevOps Repo**

   * In the App Service Deployment Center, linked the Azure DevOps repo for Continuous Deployment (CI/CD).

7. **Deployment Trigger Testing**

   * Confirmed that pushing to Azure DevOps automatically triggers a deployment to Azure App Service.

8. **Port & Environment Configuration**

   * The app dynamically uses the Azure port and MongoDB URI:

     ```javascript
     const port = process.env.PORT || 3000;
     mongoose.connect(process.env.MONGODB_URI);
     ```

---

### 🔥 Deployment Workflow (Current)

Whenever you update code:

```bash
git add .
git commit -m "Your commit message"
git push origin main   # Pushes to GitHub
git push azure main    # Pushes to Azure DevOps and triggers deployment
```

---

## 🤝 Contribution

If you have ideas for improving the Personal Blog—such as adding more interactive features, enhancing the UI, or integrating new functionalities—feel free to fork the repository and submit a pull request. Contributions are always welcome!

---

## 📄 License

This project is open-source and available for anyone to use, modify, and build upon for their own learning or projects.
