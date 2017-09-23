var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var usr = require('./router/user');
var Admin = require('./router/admin');
var config = require('./config/config');
var myDefaultFun = function(req,res,next){
  console.log("Default fn is called");
  next();
}
// app.route('/book')
//   .get(function (req, res) {
//     res.send('Get a random book')
//   })
//   .post(function (req, res) {
//     res.send('Add a book')
//   })
//   .put(function (req, res) {
//     res.send('Update the book')
//   })
app.use(bodyParser.urlencoded({extended:true}));

app.use(myDefaultFun);
app.use('/user',usr);
app.use('/admin',Admin);


app.get('/userdata/:name/:val',function(req,res,next){
  console.log("");
  res.send({"response":"Get username is called"+req.params.name});
});

app.get('/',function(req,res){
  res.send({"response":"Get is called"});
})
app.post('/',function(req,res){
  res.send({"response":"post is called"+req.body.name});
})
// app.get('/userdata/:name/:val',function(req,res){
//   res.send({"response":"Get username is called"+req.params.name});
// })

app.listen(config.port,function(){
  console.log("server started at 8080");
})
