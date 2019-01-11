/** 
    File: read-demo.js
    Author: Eli Boblett
    Date: 1.11.19
*/ 

var fs = require('fs');

fs.readFile('./data1.json', function(err, data) {
    console.log(data);
});