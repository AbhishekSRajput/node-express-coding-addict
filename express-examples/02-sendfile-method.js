const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./express-examples/public"));

app.get("/", (req, res) => {
	res.sendFile(
		path.resolve(__dirname, "./express-examples/navbar-app/index.html")
	);
});

app.all("*", (req, res) => {
	res.status(404).send("<h1>Resource you are looking for not found</h1>");
});

app.listen(5000, () => {
	console.log("server is listening at port 5000...");
});
