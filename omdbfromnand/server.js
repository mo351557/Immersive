var path = require('path');
var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var index = require('./webserver/routes/index');
var users = require('./webserver/routes/users');
var app = express();
var compiler = webpack(config);
var User=require('./webserver/schema/loginschema.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

app.use(session({ secret: 'keyboard cat',proxy: true,
   resave: true,
   saveUninitialized: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, './webclient/')));

//Authentication

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
passport.serializeUser(function(user, done) {
  //console.log(user._id);
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
 //console.log("deserializeUser")
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


app.post('/login', function(req, res, next) {
passport.authenticate('local', function(err, user, info) {
  console.log(info,user);
  if (err) { return next(err); }
  if (!user) {console.log(info); return res.send(info); }
  req.logIn(user, function(err) {
    if (err) { return next(err); }
    return res.send(user);
  });
})(req, res, next)
});

app.post('/logout',function(req,res,next){
  req.session.destroy();
  res.send('success');
})

// app.get('/login',function(req,res,next){
//   res.send('failure login');
// });
// app.get('/success',function(req,res,next){
//   res.send('success login');
// });


//Mongoose
var db = 'mongodb://localhost/moviedb';
mongoose.connect(db);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("connected with mongo");
// });



//Routes
app.use('/', index);
app.use('/stream',users);


app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
}));

app.use(webpackHotMiddleware(compiler));



//Listening to port 8080
app.listen(8080, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }
    console.log("Server started at 8080");
});
