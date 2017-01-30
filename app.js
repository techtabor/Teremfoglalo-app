var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

var main = require('./routes/main.js');
var submit = require('./routes/submit.js');
var newmain = require('./routes/newmain.js')
//var orak = require('./Data/orak.json');

//set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/', main);

app.use('/', newmain);

//Send 404 response
/*app.use(function(req, res, err){
    if(err){
        fs.createReadStream('./views/Error.ejs').pipe(res);
        console.log("Error 404: Someone requested a non-existing page");
        //console.log(err);
    }
});*/

app.use('/submit', submit);

/*app.post('/submit', function(req, res){
  console.log("Someone submitted a form");
  var name = req.body.name;
  var id = req.body.id;
  res.send(name);
  console.log(id);
});*/

//create http server
http.createServer(app).listen(3000);

console.log("Server running...");
