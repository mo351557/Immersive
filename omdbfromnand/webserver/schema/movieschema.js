var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var movieSchema=new Schema({
  Title : String,
  Poster : String,
  Year : String,
  comments: String,
  imdbID:String


});
module.exports=mongoose.model('moviedetails',movieSchema);
