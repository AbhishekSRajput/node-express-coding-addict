const authorize = (req, res, next) => {
	const { user } = req.query;

	if (user === "abhishek") {
		req.user = { name: "abhishek", id: 3 };
		next();
	} else {
		res.status(401).send("<h1>Unauthorize</h1>");
	}
};

module.exports = authorize;
