const blogController = (app) => {
	app.get("/", (req, res) => {
		//handle request and response
		res.render("home");
	});
};

module.exports = { blogController };
