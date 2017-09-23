var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var movieSchema={

Title:String,
Year:String,
Poster:String,
imdbID:String,
comments:String
};
module.exports=mongoose.model('favmovies',movieSchema);
