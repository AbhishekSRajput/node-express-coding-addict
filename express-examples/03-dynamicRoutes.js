const express = require("express");
const { includes } = require("lodash");

const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
	res.send("<h1>Home page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
	const trimmedData = products.map((product) => {
		const { id, image, name } = product;
		return { id, name, image };
	});
	res.json(trimmedData);
});

// dynamic routes
app.get("/api/products/:productId", (req, res) => {
	const { productId } = req.params;
	const singleProduct = products.find(
		(product) => product.id === Number(productId)
	);

	//if product does not exist
	if (!singleProduct) {
		return res
			.status(404)
			.send(`<h1>Requested product "${productId}" does not exist</h1>`);
	}

	res.json(singleProduct);
});

// query

app.get("/api/v1/query", (req, res) => {
	console.log(req.query);
	const { search, limit } = req.query;

	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}

	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}

	if (sortedProducts.length < 1) {
		// res
		// 	.status(200)
		// 	.send(`<p>No product matches your search query ""${search}""</p>`);

		return res.status(200).json({ success: true, data: [] });
	}

	res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
	console.log("app is listening to the changes on port 5000");
});
