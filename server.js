const express = require("express");
const ejs = require("ejs");
// const bodyParser = require("body-parser");
const controller = require("./controller/app.js");

const app = express();

app.set("views engine", "ejs");
app.use(express.static(__dirname + "/pulic"));

controller.blogController(app);

app.listen(5000, () => {
	console.log("Server is running at port 5000");
});
