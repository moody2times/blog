module.exports = {
	blogController: function (app) {
		app.get("/", (req, res) => {
			//handle request and response
			res.render("home");
		});
	},

	dbClient: async function (client) {
		const dbName = "blogDB";
		try {
			await client.connect();
			const db = client.db(dbName);
			const posts = db.collection("posts");
			await posts.insert({ author: "Moody Mudiaga" });
		} catch (err) {
			console.log(err.message);
		} finally {
			client.close();
		}
	},
};
