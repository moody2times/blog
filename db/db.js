const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "blogDB";

client.connect();
const db = client.db(dbName);
const posts = db.collection("posts");

posts.insertOne({ author: "Naomi Mudiaga" });
