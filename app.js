var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();

var main = require('./routes/main.js');

//set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.use('/', main);

//Send 404 response
app.use(function(req, res, err){
    if(err){
        fs.createReadStream('./views/Error.ejs').pipe(res);
        console.log("Error 404: Someone requested a non-existing page");
    }
});

//create http server
http.createServer(app).listen(3000);

console.log("Server running...");