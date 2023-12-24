const fs = require('fs');

let readableStream = fs.createReadStream(
    '1.txt',
    'utf8'
);

let writeableStream = fs.createWriteStream('3.txt');

readableStream.pipe(writeableStream);