var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

var main = require('./routes/main.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', main);

//create http server
http.createServer(app).listen(3000);

console.log("Server running...");