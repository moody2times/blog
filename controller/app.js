const blogController = (app) => {
	app.get("/", (req, res) => {
		//handle request and response
		res.render("home");
	});
};

const dbClient = async (client) => {
	const dbName = "blogDB";
	try {
		await client.connect();
		const db = client.db(dbName);
		const posts = db.collection("posts");
		await posts.insertOne({ author: "Naomi Mudiaga" });
		console.log("insert document successful!");
	} catch (err) {
		console.log(err.message);
	} finally {
		client.close();
	}
};

module.exports = { blogController, dbClient };
