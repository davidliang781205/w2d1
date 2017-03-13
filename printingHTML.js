var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};



var https = require('https');
var result = '';


function getAndPrintHTML (options) {


  /* Add your code here */
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');


    response.on('error', (error) => console.log(error));


    response.on('data', (data) => (result += data ));



    response.on('end', (end) => console.log(result));


  });



}


getAndPrintHTML(requestOptions);