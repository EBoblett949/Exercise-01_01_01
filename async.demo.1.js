/*
    File: async.demo.js
    Author: Eli Boblett
    Date: 1.10.19
*/ 

// Load in the file system package
var fs = require('fs');

// variable to store the data from the file system
var data = fs.readdir('/', function(err, data) {
    console.log("Data:",data);
});

console.log("This code is executed last.");
