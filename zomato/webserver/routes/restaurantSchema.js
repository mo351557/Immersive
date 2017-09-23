var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema=new Schema(
{
	_id:Number,
	name:String,
	image:String,
	rating:Number,
  address:String,
});
module.exports=mongoose.model('restdata',schema);
