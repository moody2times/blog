const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");

const { blogController, dbClient } = require("./controller/app.js");

const app = express();
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(__dirname + "/pulic"));

blogController(app);
dbClient(client);

app.listen(5000, () => {
	console.log("Server is running at port 5000");
});
