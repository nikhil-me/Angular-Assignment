var express = require('express');
var router = express.Router();


var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

/************************************************************
* The commentSchema which is used to generate the Model
*************************************************************/
var commentSchema = mongoose.Schema({
	username : String,
	body : String,
	upvote : Number,
	downvote : Number
});

var comment = mongoose.model('Comment', commentSchema);

/* post for inserting the comment */
router.post('/insert', function(req, res, next) {
	console.log("coming");
	console.log(req.body);
  	comment.create(req.body,function(err,newComment){
		if(err){
			console.log(err);
		}else{
			res.send({"status" : "Ok"});
		}
	});
});


/* get for fectching the comments */
router.get('/fetch', function(req, res, next) {
	comment.find()
		.exec(function(err,result){
			res.send(result);
	});
});


/* post for updating the upvotes on comment */
router.post('/upvote', function(req, res, next) {
	console.log(req.body);
	comment.update({"_id" : req.body.id},{$set :{"upvote" : req.body.upvote}},function(err,updatedComment){
		if (err){
			console.error(err);
		}
		else{
			res.send({"status" : "Ok"});
		}
	});
});


/* post for updating the downvotes on comment */
router.post('/downvote', function(req, res, next) {
	comment.update({"_id" : req.body.id},{$set :{"downvote" : req.body.downvote}},function(err,updatedComment){
		if (err){
			console.error(err);
		}
		else{
			res.send({"status" : "Ok"});
		}
	});
});


module.exports = router;
