const { func1, func2 } = require('./utils');

const fs = require('fs');
fs.writeFileSync('text.txt', 'hello this file is created by nodejs!.');
fs.appendFileSync(
	'text.txt',
	'\nthis is a new message will be add to text.txt file.',
);
func1();
func2();
