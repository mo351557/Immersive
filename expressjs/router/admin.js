var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.send({"response":"Get Admin is called in user"});

});

router.post('/',function(req,res){
  res.send({"response":"post Admin is called:::::"+req.body.name});
})

module.exports = router;
