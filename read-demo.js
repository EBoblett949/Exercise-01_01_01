/* 
    File: read-demo.js
    Author: Eli Boblett
    Date: 1.11.19
*/ 

var fs = require('fs');

fs.readFile('./data1.json', 'utf-8' , function(err, data) {
    console.log(data);
    data = JSON.parse(data);
    console.log(data.name);
});