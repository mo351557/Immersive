var express = require('express');
var router = express.Router();
var Movie=require('./movieSchema');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add',function(req,res,next)
{
 var movie=new Movie(req.body);

  movie.save(function(err,data){
 	if(err)
 		{res.send(err)}
 	else
 	{
 		res.send({'value':'Data is saved successfully'});
 	}
 });
});

router.get('/view',function(req,res,next)
{
  Movie.find({},function(err,data){
 	if(err)
 		{res.send(err)}
 	else
 	{
 		res.send(data);
 	}
 });
});

router.put('/update',function (req,res) {

  Movie.update({_id:req.body.id},{$set:{comments:req.body.comments}},function (err,data) {
    if(err)
      res.send(err);
    else {
      res.send({'value':'Data is Updated successfully'});
    }
  })
});



router.delete('/delete',function (req,res) {

  console.log(req.body);

  Movie.remove({_id:req.body.id},function (err,data) {
    if(err)
      res.send(err);
    else {

     res.send({'value':'Data is deleted successfully'});
    }
  });
});
module.exports = router;
