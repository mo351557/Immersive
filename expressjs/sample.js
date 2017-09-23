var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var config = require('./config/config');
var mongoose = require('mongoose')
mongoose.connect(config.URL);

db.on('error',console.error.bind(console,))
var myDefaultFun = function(req,res,next){
  console.log("Default fn is called");
  next();
}


app.use(bodyParser.urlencoded({extended:true}));

app.use(myDefaultFun);
app.use('/user',User);
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

app.listen(8080,function(){
  console.log("server started at 8080");
})
