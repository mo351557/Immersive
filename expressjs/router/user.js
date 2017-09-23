var express = require('express');
var router = express.Router();

router.get('/user', function(req,res){
  res.send({"response":"Get user is called in user"});

});

router.post('/',function(req,res){
  res.send({"response":"post user is called::::"+req.body.name});
})

module.exports = router;
