const uniqid = require("uniqid");
const Joi = require("joi");
const { posts } = require("../db/db");

const blogController = (app) => {
	app.get("/", (req, res) => {
		//handle request and response
		res.render("home");
	});
};

module.exports = { blogController };
