const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('<h1>welcome to homePage</h1>');
	}
	if (req.url === '/about') {
		res.end('<h1>about this website</h1>');
	}
	res.end(
		`<h1>we cant find the page you\'re looking for</h1> <a href="/">Back Home</a>`
	);
});

server.listen(5000);
