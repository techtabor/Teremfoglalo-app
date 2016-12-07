var express = require('express');
var router = express.Router();

var orak = require('../Data/orak.json');

router.get('/', function(req, res){
    res.render('../views/Main.ejs',
    {
      orak: orak
    });
    console.log("Request jött a homepage-re");
});

module.exports = router;
