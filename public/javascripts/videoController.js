angular.module('youtubeApp')
	.controller("videoController",["$http","$scope","$timeout","ngProgressFactory",function($http,$scope,$timeout,ngProgressFactory){
		// console.log("hi");	
		$scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.progressbar.complete();
		$scope.items1 = [1,2,3,4,5,6,7,8,9];



		$scope.comments;
		$scope.comment;
		$scope.name;


		//Fucntion to post the comment
		$scope.postComment = function(){
			// console.log("@");
			var details = {
				"username" : $scope.name,
				"body" : $scope.comment,
				"upvote" : 0,
				"downvote" : 0
			};
			// Post request to insert the comment in the mongo 
			$http.post("/insert",details)
	         .success(function(data){
	         	console.log(data);
	         	$scope.fetch();
	         	$scope.name="";
	         	$scope.comment="";
	         })
	         .error(function(err){
	                 console.log(err);
	         });
		};

		//update the post upvote in the mongo as well as 
		//at the frontend
		$scope.upvote = function(index){
			console.log($scope.comments[index].upvote);
			$http.post("/upvote",{"id" : $scope.comments[index]._id,"upvote" : $scope.comments[index].upvote+1})
	         .success(function(data){
	         	$scope.fetch();
	         })
	         .error(function(err){
	                 console.log(err);
	         });
		};

		//update the post downvote in the mongo as well as 
		//at the frontend
		$scope.downvote = function(index){
			$http.post("/downvote",{"id" : $scope.comments[index]._id,"downvote" : $scope.comments[index].downvote+1})
	         .success(function(data){
	         	$scope.fetch();
	         })
	         .error(function(err){
	                 console.log(err);
	         });
		};


		//To fetch all the comments 
		$scope.fetch = function(){
			$http.get("/fetch")
	         .success(function(data){
	         	console.log(data);
	         	$scope.comments = data;
	         })
	         .error(function(err){
	                 console.log(err);
	         });
		};


		//This is to call the fetch function 
		//when the controller is loaded
		$timeout($scope.fetch);
	}])