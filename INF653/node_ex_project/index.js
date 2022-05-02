const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
	try {
		const data = await fsPromises.readFile(path.join(__dirname, 'files', 'sample.txt'), 'utf-8');
		console.log(data);
		await fsPromises.unlink(path.join(__dirname, 'files', 'sample.txt'));
		await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
		await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), "\nAppended text");
		await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
		const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
		console.log(newData);
	}
	catch (err) {
		console.error(err);
	}
};

fileOps();

/*fs.readFile('sample.txt', 'utf-8', (err, data) => {
	if(err){ throw err;}
	console.log(data);
});*/

//const output = 'This is writing a file';

/*fs.writeFile('reply.txt', output, (err) => {
	if(err){throw err;}
	console.log('Write complete');

	fs.appendFile('reply.txt', "\nEditing file", (err) => {
		if(err){throw err;}
		console.log('Append complete');
	});
});*/



process.on('uncaughtException', err => {
	console.error(`There was an uncaught error: ${err}`);
	process.exit(1);
});

