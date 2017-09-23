var express = require('express');
var router = express.Router();
var Movie=require('../schema/movieschema');
var Auth=require('../schema/loginschema');

/* GET users listing. */
function isloggedIn(req, res, next) {
    if (req.user) {
      console.log("user router",req.user);
        next();
    } else {
      
        res.redirect('/login');
    }
}


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/add',isloggedIn, function(req, res, next)
{
  var movie=new Movie(req.body);
  movie.save(function(err,data){
  if(err)
    res.send({'success':'Not Saved'});
  else
  res.send({'success':'SAVED'});
  });
});

router.get('/display', isloggedIn, function(req, res, next){
Movie.find({},function(err,data){
if(err)
  res.send(err);
else {
  res.send(data);
}
});
});

router.put('/update', isloggedIn, function (req, res, next) {
  Movie.update({_id:req.body.id},{$set:{comments:req.body.comments}},function (err,data) {
    if(err)
      res.send({'success':'Not updated'});
    else {
      res.send({'success':'updated'});
    }
  })
});

router.delete('/delete', isloggedIn, function (req, res, next) {
  Movie.remove({_id:req.body.id},function (err,data) {
    if(err)
      res.send({'success':'Not deleted'});
    else {
      res.send({'success':'deleted'});
    }
  });
});

//login credentials
// var auth=new Auth({username:'admin',password:'admin'});
// auth.save();
//
// router.post('/login',function (req, res, next) {
//   console.log(req.body);
// });



module.exports = router;
