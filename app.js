require("dotenv").config();

const logger = require("morgan");
const errorHandler = require("errorhandler");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const es6Renderer = require('express-es6-template-engine')

const express = require("express");
const cors = require('cors'); 
const app = express();
const path = require("path");
const port = 3000;

//debugger modules
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));
app.use(methodOverride());
app.use(errorHandler());

//direction for static files
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());


app.set("styles", path.join(__dirname, "styles"));
app.set("views", path.join(__dirname, "views"));
//for html page we should use ejs instead of html and html file should end up with .ejs
app.set("view engine", "ejs");

// app.engine('html', es6Renderer);
// app.set('view engine', 'html');



app.get("/",(req, res) => {
  res.render("home__static");
});

app.get("/dashboard", (req,res) => {
  res.render("home__dynamic");
})

app.get("/testimonial", (req, res) => {
  res.render("testimonial");
})

app.get("/courses", (req,res) => {
  res.render("courses");
})

app.get("/course", (req,res) => {
  res.render("course");
})

app.get("/login", (req,res) => {
  res.render("login");
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
