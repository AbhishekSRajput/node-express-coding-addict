const path = require('path');

console.log(path.sep);

//joins the path and normalize it(removes unwanted characters like extra '/');
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

//base of the directory
const base = path.basename(filePath);
console.log(base);

//absolute path
const absolutePath = path.resolve(
	__dirname,
	'content',
	'subfolder',
	'test.txt'
);
console.log(absolutePath);
