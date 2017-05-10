var mongoose=require('mongoose');
var detailSchema=mongoose.Schema({
	/*_id:{
		type:String,
		required:true
		},*/
	firstname:{
		type:String,
		required:true
		},
	lastname:{
		type:String,
		required:true
		},
	number:{
		type:Number,
		required:true
		},
	email:{
		type:String,
		required:true
		},
	pass:{
		type:String,
		required:true
		}
});
var detail=module.exports=mongoose.model('detailcollection',detailSchema);
module.exports.addDetails=function(details,callback){
detail.create(details,callback);
};
module.exports.getDetails=function(number,callback){
	detail.find({number:number},callback);
};
module.exports.deletee=function(number,callback){
	detail.remove(number,callback)
};
module.exports.updatee=function(numbers,data,options,callback){
	var query={
		 number:numbers
	}
	var update={
		firstname:data.firstname,
		lastname:data.lastname
        }
	detail.findOneAndUpdate(query,update,{},callback);
	};











