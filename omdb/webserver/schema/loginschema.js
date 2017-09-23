var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var loginSchema=new Schema({
  username : String,
  password: String
});
loginSchema.methods.validPassword = function( pwd ) {
  return ( this.password === pwd );
};

module.exports=mongoose.model('logindetails',loginSchema);
