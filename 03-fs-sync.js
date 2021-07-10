const { readFileSync, writeFileSync } = require('fs');

//reading off files
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first, second);

//writing files

writeFileSync(
	'./content/third.txt',
	`here is the third file containing: "${first}", "${second}" `,
	{ flag: 'a' }
);
