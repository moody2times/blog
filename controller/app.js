const uniqid = require("uniqid");
const Joi = require("joi");
const { posts } = require("../db/db");

const schema = Joi.object({
	_id: Joi.any(),
	name: Joi.string().required(),
	skill: Joi.string().required(),
	age: Joi.number().required(),
});

const blogController = (app) => {
	app.get("/", (req, res) => {
		//handle request and response
		res.render("home");
	});

	app.post("/blog", (req, res) => {
		const _id = uniqid();
		const { name, age, isDeveloper, isMarried, kids } = req.body;

		const document = {
			_id,
			name,
			age,
			isDeveloper,
			isMarried,
			kids,
		};

		// const { value: post, error } = schema.validate(document);
		// if (error) {
		// 	const {
		// 		details: [{ message }],
		// 	} = error;
		// 	res.send(message);
		// 	return;
		// }

		posts.insertOne(document, (err, result) => {
			if (err) {
				console.log(err.message);
				return;
			}
			res.status(200);
			res.json(document);
		});
	});

	app.route("/blog/:id")
		.put((req, res) => {
			const id = req.params.id;
			const updateData = req.body;
			posts.findOneAndUpdate(
				{ _id: id },
				{ $set: updateData },
				(err, result) => {
					if (err) {
						console.log(err.message);
						res.end();
					}
					const updatedDoc = JSON.stringify(result.value);
					res.send(`Successfully updated ${updatedDoc}`);
				}
			);
		})
		.delete((req, res) => {
			const id = req.params.id;

			posts.deleteOne({ _id: id }, (err, result) => {
				if (err) {
					console.log(err.message);
					return;
				}
				res.send(`Deleted one document with the id: ${result.insertedId}`);
			});
		});
};

module.exports = { blogController };
