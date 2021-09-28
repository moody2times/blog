const express = require("express");
const ejs = require("ejs");
// const bodyParser = require("body-parser");

const app = express();

app.set("views engine", "ejs");
app.use(express.static("/pulic"));

app.listen(5000, () => {
	console.log("Server is running at port 5000");
});
