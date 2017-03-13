// while https is built-in to Node, it is a module, so it must be required
var https = require('https');



function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');


  response.on('error', (error) => console.log(error));

  // the callback is invoked when a `data` chunk is received
  response.on('data', (data) => console.log('Chunk Received: \n', data));

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });

  response.on('finish', (finish) => console.log(finish));

});

}


getAndPrintHTMLChunks();