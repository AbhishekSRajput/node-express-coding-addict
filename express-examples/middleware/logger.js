const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const fullYear = new Date().getFullYear();
	console.log(method, url, fullYear);
	next();
};

module.exports = logger;
