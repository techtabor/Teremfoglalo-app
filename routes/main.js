var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('../views/Main.ejs');
    console.log("Request jött a homepage-re");
});

module.exports = router;