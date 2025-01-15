// Import the necessary packages
const express = require("express"); // Express framework to build the web app
const bodyParser = require("body-parser"); // Middleware to parse request bodies
const ejs = require("ejs"); // Templating engine for rendering dynamic views
const mongoose = require('mongoose'); // MongoDB library to interact with the database

// Starting content for the Home and About pages
const homeStartingContent = "Welcome to my personal blog! My name is Junaid, and I am graduating soon as a computer engineer from McGill. During my second year, I had created this platform as a way to express my thoughts, reflect on my experiences, and share my journey with the world. Here, you will find insights into my student and professional life, including the skills I have developed, the lessons I have learned, and the projects I have undertaken. Whether you're looking for inspiration, motivation, or just a fresh perspective, I hope you'll find something of value here. So, make yourself at home, grab a cup of coffee, and join me on my journey as I explore the world of technology, engineering, and personal growth.";
const aboutContent = "Welcome to my personal blog, where I share my journey as a computer engineering student at McGill University. This platform serves as a creative outlet for me to document my experiences, reflect on my personal and professional growth, and connect with like-minded individuals. From my involvement in various student organizations and internships, to my personal projects and self-learning, I aim to provide a glimpse into my life and the lessons I've learned along the way. I have built this blog using cutting-edge technologies such as Node.js, Express.js and MongoDB, and will continue to add new features and improve the user experience. Join me on my journey and let's learn, grow and connect together.";

// Initialize the Express app
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static("public"));

// Connect to the MongoDB database
mongoose.connect("[REDACTED]", {
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

  // Log the user's input to the console
  // console.log(`Name: ${userName}, Email: ${userEmail}, Comment: ${userComment}`);

  // Render the contact page with a thank-you message
  res.render("contact", {
    thankYouMessage: `Thank you, ${userName}! Your message has been received.`,
  });
});

// Start the server and listen on port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});