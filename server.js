const express = require("express");
// const bodyParser = require("body-parser");
const controller = require("./controller/app.js").blogController;

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/pulic"));

controller(app);

app.listen(5000, () => {
	console.log("Server is running at port 5000");
});
