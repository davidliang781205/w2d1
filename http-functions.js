var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */


    https.get(options, function (response) {
      var result = '';
      // set encoding of received data to UTF-8
      response.setEncoding('utf8');


      response.on('error', (error) => console.log(error));


      response.on('data', (data) => (result += data ));


      response.on('end', (end) => printHTML(result));


    });

    function printHTML (html) {
      console.log(html);
    }

  }

