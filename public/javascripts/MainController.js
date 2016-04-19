angular.module('youtubeApp',['ngRoute'])
	.controller("MainCtrl",["$http","$scope",function($http,$scope){

	}])
	.directive('navBar', function() {
		return {
			restrict: 'E',
	    	templateUrl: '/views/elements/nav-bar.html',
	  };
	})
	.directive('sideBar', function() {
		return {
			restrict: 'E',
	  	 	templateUrl: '/views/elements/side-bar.html',
	  };
	});


