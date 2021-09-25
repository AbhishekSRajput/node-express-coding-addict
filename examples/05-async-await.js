const { readFile, writeFile } = require('fs').promises;

const start = async () => {
	try {
		const second = await readFile('./content/second.txt', 'utf-8');
		const first = await readFile('./content/first.txt', 'utf-8');
		await writeFile(
			'./content/mind-grenade.txt',
			`this is awesome: ${first}, ${second}`,
			{ flag: 'a' }
		);
		console.log(first);
		console.log(second);
	} catch (error) {
		console.log(error);
	}
};

start();
