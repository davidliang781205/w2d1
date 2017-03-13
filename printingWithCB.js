var https = require('https');

function getHTML (options, callback) {
  var result = '';

  /* Add your code here */
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');


    response.on('error', (error) => console.log(error));


    response.on('data', (data) => (result += data ));


    response.on('end', (end) => callback(result));


  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);
