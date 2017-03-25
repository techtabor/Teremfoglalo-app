var express = require('express');
var router = express.Router();
var orak = require('../Data/OraId.json');

router.get('/', function(req, res){
    var teremOrak = [];
    if (req.query.terem != undefined && orak[req.query.terem] != undefined) {
        teremOrak = orak[req.query.terem];
    }
    var termek = [];
    for (teremNev in orak) {
        termek.push(teremNev)
    }
    res.render('../views/NewMain.ejs',
        {
            oraarray : teremOrak,
            termek: termek,
        });
    console.log("Request jött a homepage-re");
});

module.exports = router;
