require("dotenv").config();

const logger = require("morgan");
const errorHandler = require("errorhandler");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

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
app.set("view engine", "pug");


app.get("/", async (req, res) => {
  res.send('welcome to new education site')
});


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});