var express = require('express');
var router = express.Router();
var Mobile = require('../model/mobile');
 var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));

router.get('/usr', function(req,res){
  res.send({'response':'Get in user router'});
})

router.post('/insert', function(req,res){
  var mobAdd = new Mobile(req.body);    //to  get the values to store in database from body
  mobAdd.save(function(err,data){
    if(err){
    return console.log("error in adding mobile da");
  }

    res.send({"response":data})

  });
})

router.post('/find', function(req,res){

Mobile.find(function(err,data){
    if(err){
      return console.log("error in finding data");
    }
    res.send({"response":data})
  })
})

router.post('/findOne', function(req,res){
  Mobile.findOne({name:req.body.name}, function(err,data){
    if(err){
      return console.log("error while finding "+req.body.name);
    }
    res.send({"response":data})
  })
})

router.post('/findAll', function(req,res){
  Mobile.find({name:req.body.name}, function(err,data){
    if(err){
    return  console.log('error while finding all');
    }
    res.send({"response":data})
  })
})

router.post('/update', function(req,res){
  //var updt = req.body.name+1111;
  Mobile.update({name:req.body.name},{$set:{modelId:req.body.modelId}}, function(err,data){
    if(err){
      return console.log('error while updating');
    }
    res.send({"response":data})
  })
})

router.post('/remove', function(req,res){
  Mobile.remove({name:req.body.name}, function(err,data){
    if(err)
    return console.log('error while removing,, sorry :(');

    res.send({'response':data})
  })
})

module.exports = router
