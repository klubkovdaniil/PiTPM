const fs = require('fs');

let readableStream = fs.createReadStream(
    '1.txt',
    'utf8'
);

let writeableStream = fs.createWriteStream('2.txt');

readableStream.on('data', function (chunk) {
    writeableStream.write(chunk);
    console.log("Done")
});