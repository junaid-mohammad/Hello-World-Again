const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const homeStartingContent = "Welcome to my personal blog! My name is Junaid, and as a third-year computer engineering student at McGill, I have created this platform as a way to express my thoughts, reflect on my experiences, and share my journey with the world. Here, you will find insights into my student and professional life, including the skills I have developed, the lessons I have learned, and the projects I have undertaken. Whether you're looking for inspiration, motivation, or just a fresh perspective, I hope you'll find something of value here. So, make yourself at home, grab a cup of coffee, and join me on my journey as I explore the world of technology, engineering, and personal growth.";
const aboutContent = "Welcome to my personal blog, where I share my journey as a computer engineering student at McGill University. This platform serves as a creative outlet for me to document my experiences, reflect on my personal and professional growth, and connect with like-minded individuals. From my involvement in various student organizations and internships, to my personal projects and self-learning, I aim to provide a glimpse into my life and the lessons I've learned along the way. I have built this blog using cutting-edge technologies such as Node.js, Express.js and MongoDB, and will continue to add new features and improve the user experience. Join me on my journey and let's learn, grow and connect together.";
const contactContent = "Thank you for visiting my personal blog. I am always open to connecting with like-minded individuals who share my passion for technology and its ability to solve real-world problems. If you would like to reach out to me for any reason, whether it's to discuss a collaboration, ask a question, or simply connect, you can find me on LinkedIn at https://www.linkedin.com/in/junaidarif-mohammad or via email at mohammad.junaidarif@mail.mcgill.ca. I look forward to hearing from you and engaging in meaningful conversations. Thank you for your interest in my blog and my work.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("[REDACTED]",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.set("strictQuery", true);

const postSchema = new mongoose.Schema ({
 title: String,
 content: String
});

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){

  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
  });
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });


  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post) {
    if (!err) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    }
  });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res) {
  res.render("contact", {contactContent: contactContent});
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
