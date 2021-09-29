const express = require("express");

const app = express();

// app.get
app.get("/", (req, res) => {
	console.log("user hit the resources");
	res.status(202).send("<h1>home page</h1>");
});

app.get("/about", (req, res) => {
	res.status(202).send("<h1>About page</h1>");
});

// app.all

app.all("*", (req, res) => {
	res.status(404).send("<h1>Resource not found</h1>");
});

// app.listen

app.listen(5000, () => {
	console.log("server is listening on port 5000");
});

// app.post
// app.put
// app.delete
// app.use
