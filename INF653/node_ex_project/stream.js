const fs = require('fs');

const rs = fs.createReadStream('./files/longsample.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/newsample.txt');

/*rs.on('data', (dataChunk) => {
	ws.write(dataChunk);
});*/

rs.pipe(ws);