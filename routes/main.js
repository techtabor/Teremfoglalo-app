var express = require('express');
var router = express.Router();

var orak = require('../Data/orak.json');
var hossz = orak.osszorak.length;
var oraarray = new Array(hossz);
for (var i = 0; i < oraarray.length; i++){
    oraarray[i] = new Array(6);
};

for (var i = 0; i < hossz; i++){
    for (var j = 0; j < 6; j++){
      oraarray[i][j] = orak.osszorak[i].hetiorak[j];
    }
}

router.get('/', function(req, res){
    res.render('../views/Main.ejs',
    {
      oraarray: oraarray,
      orak: orak,
      hossz: hossz
    });
    console.log("Request jött a homepage-re");
});

//router.get('/submit')

module.exports = router;
module.exports.oraarray = oraarray;
module.exports.orak = orak;
