/*
    File: read-directory-demo.js
    Author: Eli Boblett
    Date: 1.14.19
*/ 

var fs = require('fs');

fs.readdir('/', function(err, data) {
   console.log(data);
});
