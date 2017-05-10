var express = require('express');
var app = express();
var bodyparser=require('body-parser');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb'); 
var details=require('./details.js');

 app.use(bodyparser.urlencoded({extended:true}));

 app.get('/', function(req,res) {
res.sendFile(__dirname+'/'+'first.html');
});
app.post('/print',function(req,res){
var data=req.body;
//mongo connection
details.addDetails(data,function(err,success){
	if(success)
	{
		response={
			"result":"data inserted successfully"
			}
					res.json(response);
	}
	else{
		error=	{
		"error":"insertion failed"
		} 
	}
	
	res.json(error);
});
});
app.get('/retrival', function(req,res) {
res.sendFile(__dirname+'/'+'retrival.html');
});
app.get('/retrivals',function(req,res){
	var ret=req.query.number;
	details.getDetails(ret,function(err,data){
		if(err){
			throw err;
		}
		else{
			res.json(data);
		}
		
	});
});
app.get('/delete', function(req,res) {
res.sendFile(__dirname+'/'+'delete.html');
});

app.get('/deleted',function(req,res){
	var ret=req.query.number;
	details.deletee(ret,function(err,data){
		if(err){
			throw err;
		}
		else{
			result={
			"meassage":"successfully deleted"
			}		
		res.json(data);
		}
		
	});
});
app.get('/update',function(req,res){
	res.sendFile(__dirname+'/update.html');
});
app.get('/updated',function(req,res){
	var number=req.query.number;
	var firstname,lastname,email,pass;
	var data={
	 firstname:req.query.firstname,
	 lastname:req.query.lastname,
	 	 email:req.query.email,
	 pass:req.query.pass
	 };
details.updatee(number,data,{},function(err,data){
	if(err)
		throw err;
	else{
		result={
			"message":"updated successfully"
		}
		res.end(""+data);
	}
	
});
});
 app.listen(3000, function() {
console.log('Express is listening to http://localhost:3000');
});
