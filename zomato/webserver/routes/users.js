var express = require('express');
var router = express.Router();
var restSchema=require('./restaurantSchema');
/* GET users listing. */


router.post('/add', function(req, res) {
  console.log("in router");
  var rest=new restSchema(req.body);
  console.log(rest);
  rest.save(function(err,data)
{
  if(err)
  {
    res.send(err);
  }
  else {
    res.send(data);

    console.log("added");
  }
});
});
router.get('/display', function(req, res) {
  console.log("in router");
    var rest=new restSchema();
    rest.find({},function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
});

router.delete('/deleteDb', function(req, res) {
  console.log("in router");
  var rest=new restSchema(req.body);
  console.log(rest);
  rest.remove(function(err,data)
{
  if(err)
  {
    res.send(err);
  }
  else {
    res.send(data);

    console.log("deleted");
  }
});

});
module.exports = router;
