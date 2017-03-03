var express = require('express');
var router = express.Router();
var orak = require('../Data/OraID.json');

var hossz = orak.minden.length;
var oraarray = new Array(hossz);

for (var i = 0; i < hossz; i++){
	oraarray[i] = orak.minden[i];
}

router.get('/', function(req, res){
    res.render('../views/NewMain.ejs',
    	{
    		oraarray: oraarray
    	});
    //res.json(orak);
    console.log("Request jött a homepage-re");
});

//router.get('/submit')

module.exports = router;
