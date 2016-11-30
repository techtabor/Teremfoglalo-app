var http = require('http');
var express = require('express');
var app = express();

var main = require('./routes/main.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.use('/', main);

http.createServer(app).listen(3000);

console.log("Server running...");