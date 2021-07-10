const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	//second readFile
	readFile('./content/second.txt', 'utf-8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;

		//writeFile
		writeFile(
			'./content/third-async.txt',
			`here are the async file results: ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log(result);
			}
		);
	});
});
