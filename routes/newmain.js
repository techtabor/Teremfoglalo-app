var express = require('express');
var fs = require('fs');
var router = express.Router();
var orak = require('../Data/OraId.json');
var termek = [];
for (teremNev in orak) {
    termek.push(teremNev)
}

/*function Update(){
	orak = require('../Data/OraId.json');
	termek = [];
	for (teremNev in orak) {
		termek.push(teremNev)
	}
}*/

router.get('/', function(req, res){
    var teremOrak = [];
    var terem = "";
    if (req.query.terem != undefined && orak[req.query.terem] != undefined) {
        terem = req.query.terem;
        teremOrak = orak[terem];
    } else {
      terem = Object.keys(orak)[0];
    }

    if (req.query.ujterem != undefined){
    	ujterem = req.query.ujterem;
    	terem = ujterem;
    	var stringorak = JSON.stringify(orak);
    	stringorak = stringorak.slice(0, -1);
      var modifiedorak;
      if (Object.keys(orak).length == 0 ) {
        modifiedorak = stringorak + '"' + ujterem + '":' + '[]' + '}';
      } else {
    	  modifiedorak = stringorak + ',' + '"' + ujterem + '":' + '[]' + '}';
      }
    	orak = JSON.parse(modifiedorak);
    }

    if (req.query.toroltTerem != undefined){
    	delete orak[req.query.toroltTerem];
    }

    var json = JSON.stringify(orak); 
    fs.writeFile('Data/OraId.json', json, function(err){
    	if(err){
    		return console.log(err);
    	}else{
    		console.log("File saved!");		
    	}
    });

    termek = [];
	for (teremNev in orak) {
    	termek.push(teremNev)
	}

    console.log(orak);

	res.render('../views/NewMain.ejs',
        {
            oraarray : teremOrak,
            termek: termek,
            terem: terem,
        });
    console.log("Get request jött a homepage-re");

});

router.post('/', function(req, res){
	var sorszam = req.body.id;
  	var name = req.body.name;
  	var terem = req.body.terem;
	console.log("Post request " + terem + " " + sorszam + " " + name);
  	var newOra = {id: sorszam, value: name};
  	var bentvan = false;
  	for (var i = 0; i < orak[terem].length; i++){
  		if (orak[terem][i].id == sorszam){
  			orak[terem][i].value = name;
  			bentvan = true;
  		}
  		if (orak[terem][i].value == ""){
  			orak[terem].splice(i, 1);
  		}
  	}
  	if (!bentvan && name != "") {
  		orak[terem].push(newOra);
  	}
  	teremOrak = orak[terem];
  	res.render('../views/NewMain.ejs',
        {
            oraarray : teremOrak,
            termek: termek,
            terem: terem,
        });
	var json = JSON.stringify(orak); 
    fs.writeFile('Data/OraId.json', json, function(err){
    	if(err){
    		return console.log(err);
    	}else{
    		console.log("File saved!");
    	}
    });
});

module.exports = router;
