var http = require('http');
var express = require('express');
var app = express();

var main = require('./routes/main.js');

//set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.use('/', main);

//Send 404 response
app.use(function(req, res){
    res.status(404).send("Sorry this doesn't exist");
});

http.createServer(app).listen(3000);

console.log("Server running...");