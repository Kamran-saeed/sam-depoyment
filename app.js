var express = require('express');
var app = express();

exports.handler = (event, context, callback) => {
   console.log('Hello World');
   callback(null, "kamran saeed");
};