const { func1, func2 } = require('./utils');
const chalk = require('chalk');

const fs = require('fs');
fs.writeFileSync('text.txt', 'hello this file is created by nodejs!.');
fs.appendFileSync(
	'text.txt',
	'\nthis is a new message will be add to text.txt file.',
);
func1();
func2();
const log = console.log;
/**
 * *********************************************************
 * try chalk to color consol lo
 *
 *  */
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(
	chalk.green(
		'I am a green line ' +
			chalk.blue.underline.bold('with a blue substring') +
			' that becomes green again!',
	),
);

// ES2015 template literal
log(`
        CPU: ${chalk.red('90%')}
        RAM: ${chalk.green('40%')}
        DISK: ${chalk.yellow('70%')}
        `);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
/***
 * end chalk colors
 * *********************************************************************
 */
let command = process.argv[2];
if (command === 'add') console.log('add new note...');
if (command === 'remove') console.log('remove old note...');
const yargs = require('yargs');
console.log(yargs.argv);
//{ _: [ 'add' ], title: 'this is my new title', '$0': 'app.js' }
// if we write `node app.js --help` then we will get
// Options:
// --help     Show help                                                 [boolean]
//--version  Show version number                                       [boolean]
yargs.version('1.1.1'); //1.0.0
console.log(yargs.argv);
