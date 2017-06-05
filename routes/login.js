var express = require('express');
var fs = require('fs');
var router = express.Router();

var userInfo = require('../Data/UserData.json');

router.get('/', function(req, res){
	res.render('../views/login.ejs');
});

router.post('/', function(req, res){
	loginName = req.body.username;
	password = req.body.psw;
	console.log("Post megjött a loginra");
	console.log("Username: " + loginName + " password: " + password);
	for (name in userInfo.users){
		console.log("Ciklusváltozó: " + name);
		console.log("For ciklus elindult");
		console.log("Foron belül: Name: " + name.username + " psw: " + name.psw);
		if (userInfo.users[name].username == loginName && userInfo.users[name].psw == password){
			res.render('../views/loginSuccess.ejs');
			console.log("Valaki belépett");
		}
	}
});

module.exports = router;