// Import the necessary packages
const express = require("express");           // Express framework to build the web app
const bodyParser = require("body-parser");    // Middleware to parse request bodies
const ejs = require("ejs");                   // Templating engine for rendering dynamic views
const mongoose = require('mongoose');         // MongoDB library to interact with the database
require("dotenv").config();                   // Load environment variables from .env file
const { homeStartingContent, aboutContent }   // Import the starting content for the Home and About pages
        = require('./data/content');

// Initialize the Express app
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static("public"));

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Enable strict query mode in Mongoose
mongoose.set("strictQuery", true);

// Define the schema for blog posts
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

// Create the Post model using the schema
const Post = mongoose.model("Post", postSchema);

// Route to render the Home page with all blog posts
app.get("/", async function (req, res) {
  try {
    const posts = await Post.find({});
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
    });
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
});

// Route to render the Compose page
app.get("/compose", function (req, res) {
  res.render("compose");
});

// Route to handle form submission for new blog posts
app.post("/compose", async function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  try {
    await post.save();
    res.redirect("/");
  } catch (err) {
    console.error("Error saving post:", err);
  }
});

// Route to render individual blog posts based on their ID
app.get("/posts/:postId", async function (req, res) {
  const requestedPostId = req.params.postId;

  try {
    const post = await Post.findOne({ _id: requestedPostId });
    if (post) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error("Error fetching post:", err);
  }
});

// Route to render the About page
app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

// Route to render the Contact page
app.get("/contact", function (req, res) {
  res.render("contact", {});
});

// POST route to handle form submissions on the Contact page
app.post("/contact", (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userComment = req.body.text;

  // Render the contact page with a thank-you message
  res.render("contact", {
    thankYouMessage: `Thank you, ${userName}! Your message has been received.`,
  });
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});