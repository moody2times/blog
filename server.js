const express = require("express");
// const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const { blogController, dbClient } = require("./controller/app.js");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/pulic"));

blogController(app);
dbClient(client);

app.listen(5000, () => {
	console.log("Server is running at port 5000");
});
