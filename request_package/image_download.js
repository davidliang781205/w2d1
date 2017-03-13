var request = require('request');
var fs = require('fs');

console.log('Downloading...');
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Content type:', response.headers['content-type']);
       })
       .on('end', (end) => console.log('Download completed!'))
       .pipe(fs.createWriteStream('./future.jpg'))




