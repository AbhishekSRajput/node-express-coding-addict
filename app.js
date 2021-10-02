const express = require("express");

const { people } = require("./data");

const app = express();

//static assets
app.use(express.static("./express-examples/methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
	const { name } = req.body;

	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: " please provide name and value" });
	}

	res.status(201).json({ success: true, person: name });
});

app.listen(5000, () => {
	console.log("app is listening on the port 5000...");
});
