console.log('Hello World');



const os = require('os');
const path = require('path');
//const math = require('./math');
const { add, sub, mult, div } = require('./math');

console.log(add(2,3));
console.log(sub(2,3));
console.log(mult(2,3));
console.log(div(2,3));


/*
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));*/