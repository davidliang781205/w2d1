var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};





getHTML(requestOptions, (a) => console.log(a.split("").reverse().join("")));