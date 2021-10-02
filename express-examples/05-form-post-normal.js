const express = require("express");

const app = express();

//data import
let { people } = require("./data");

//static assets
app.use(express.static("./express-examples/methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
	console.log(req.body);
	const { firstName } = req.body;

	if (firstName) {
		return res.status(200).send(`<h1>Hello mr/miss ${firstName}</h1>`);
	}

	res.status(401).send("<h1>Please provide credentials</h1>");
});

app.listen(5000, () => {
	console.log("app is listening on the port 5000");
});
