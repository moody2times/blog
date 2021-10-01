const express = require("express");

const { blogController } = require("./controller/app.js");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/pulic"));

blogController(app);

app.listen(5000, () => {
	console.log("Server is running at port 5000");
});
