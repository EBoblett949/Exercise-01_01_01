/*
    File: write-file-demo.js
    Author: Eli Boblett
    Date: 1.14.19
*/ 

var fs = require('fs');

var jsonstring = {
    "name": "Jotaro",
    "age": 17
}

fs.writeFile('./data2.json', JSON.stringify(jsonstring), function(err) {
    if (err) {
        console.log(err);
    }
});
