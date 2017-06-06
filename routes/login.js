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
	for (name in userInfo.users){
		if (userInfo.users[name].username == loginName && userInfo.users[name].psw == password){
			res.render('../views/loginSuccess.ejs');
			res.cookie('username', loginName, {});
			console.log(loginName + " belépett, a jelszava: " + password);
		}
	}
});

module.exports = router;