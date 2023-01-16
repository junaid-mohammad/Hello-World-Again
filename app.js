const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const homeStartingContent = "Welcome to my personal blog. I'm Junaid, a third year computer engineering student at McGill and I have created this space to clear my mind while at the same time sharing my story with the world. The goal of this blog is to document my student and professional experiences, skills that I have developed, and lessons that I have learned.";
const aboutContent = "Personal blog is a great way to decompress and get things off your chest. It is a fantastic personal exercise for anyone who needs a platform to just share their thoughts and connect with like-minded people. I plan on using this solely for that. This site was built using node and express hosted on render, and it stores user data in a mongodb database which is hosted on Atlas. I am only at the inital stages of this project. Stay tuned, there's a lot still to come!";
const contactContent = "I'm always interested in discussing solving real-world problems through technology. If you'd like to chat, you can reach out to me on LinkedIn - https://www.linkedin.com/in/junaidarif-mohammad or through email - mohammad.junaidarif@mail.mcgill.ca. I look forward to our chat! 😊";

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
