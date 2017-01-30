var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('../views/NewMain.ejs');
    console.log("Request jött a homepage-re");
});

//router.get('/submit')

module.exports = router;
