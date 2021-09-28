const fs = require("fs");
const http = require("http");

module.exports = {
	blogController: function (app) {
		app.get("/", (req, res) => {
			//handle request and response
			res.send("Welcome to the dummy blog");
		});
	},
};
