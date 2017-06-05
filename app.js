var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

var main = require('./routes/main.js');
var login = require('./routes/login.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', main);
app.use('/login', login);

//create http server
http.createServer(app).listen(3000);

console.log("Server running...");