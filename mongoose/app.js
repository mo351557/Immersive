var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config/config');
var usr = require('./router/user');
var mongoose = require('mongoose');
mongoose.connect(config.url);               //to connect with mongoose
var db = mongoose.connection;

db.on('error', console.error.bind(console,'error da:'));
db.once('open', function(){
  console.log('you are connected');
})

app.use(bodyParser.urlencoded({extended:true}));
app.use('/user',usr);

app.get('/', function(req,res){
  res.send({"response":"get method is initiated"});
})


app.listen(config.port, function(){
  console.log('server started at 8000');
});
