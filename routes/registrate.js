var express = require('express');
var fs = require('fs');
var router = express.Router();
var userInfo = require('../Data/UserData.json');

router.post('/', function(req, res){
	var username = req.body.username;
	var psw = req.body.psw;
	var pswAgain = req.body.pswAgain;
	var lastname = req.body.lastname;
	var firstname = req.body.firstname;
	var EMail = req.body.EMail;
	var status = req.body.status;
	var newUser = {};
	if (psw == pswAgain){
		res.render('../views/registrate.ejs');
		newUser = {username: username, psw: psw, lastname: lastname, firstname: firstname, EMail: EMail, status: status};
		userInfo.users.push(newUser);
		var json = JSON.stringify(userInfo);
		fs.writeFile('Data/UserData.json', json, function(err){
			if(err){
				console.log(err + "Nagy a baj");
			}
			else{
				console.log("Kafa, new user registrated");
			}
		});
	}
	console.log(userInfo);
});

module.exports = router;