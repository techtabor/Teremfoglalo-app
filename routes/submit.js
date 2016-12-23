var express = require('express');
var router = express.Router();

var main = require('./main.js');

router.post('/', function(req, res){
  var id = req.body.id;
  var name = req.body.name;
  res.send(name);
  console.log(id);
  var i = Math.floor(id/5);
  var j = id%5;
  console.log(i, j);
  main.orak.osszorak[i].hetiorak[j].ora = name;
});

module.exports = router;
