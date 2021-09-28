const fs = require("fs");
const http = require("http");

module.exports = {
	onRequest: (request, response) => {
		const path = request.url;
		if (path === "/node") {
			console.log("accessed this path");
		}
		response.setHeader("Content-Type", "text/plain");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.writeHead(200, "Successful");
		const data = JSON.stringify(http.STATUS_CODES);
		fs.writeFile("./status_codes.txt", data, () => {
			response.end();
		});
	},
};
