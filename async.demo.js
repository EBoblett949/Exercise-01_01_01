/*
    File: async.demo.js
    Author: Eli Boblett
    Date: 1.10.19
*/ 

// Load in the file system package
var fs = require('fs');

function phoneNumber(err, data) {
    console.log("Data:",data);
}

// variable to store the data from the file system
var data = fs.readdir('/', phoneNumber);


console.log("This code is executed last.");
