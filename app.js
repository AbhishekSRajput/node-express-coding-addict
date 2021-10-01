const express = require("express");

//middleware functions
const logger = require("./express-examples/middleware/logger");
const authorize = require("./express-examples/middleware/authorize");

const app = express();

app.use([authorize, logger]);

app.get("/", (req, res) => {
	res.status(200).send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
	res.status(200).send("<h1>About Page</h1>");
});

app.listen(5000, () => {
	console.log("App is listening to changes on port 5000");
});
