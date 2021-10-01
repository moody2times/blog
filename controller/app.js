const uniqid = require("uniqid");
const Joi = require("joi");
const { posts } = require("../db/db");

const blogController = (app) => {
	app.get("/", (req, res) => {
		//handle request and response
		res.render("home");
	});

	app.post("/blog", (req, res) => {
		const _id = uniqid();
		const { name, skill, age } = req.body;

		const document = {
			_id,
			name,
			skill,
			age,
		};

		posts.insertOne(document, (err, result) => {
			if (err) {
				console.log(err.message);
				return;
			}
			res.send(
				`<h4>
					Inserted one document with ${result.insertedId} successfully
				</h4>`
			);
		});
	});
};

module.exports = { blogController };
