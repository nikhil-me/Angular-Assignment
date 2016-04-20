angular.module('youtubeApp',['ngProgress','ui.router'])
	.controller("MainCtrl",["$http","$scope","ngProgressFactory",function($http,$scope,ngProgressFactory){
		 console.log("hi");	
		$scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.progressbar.complete();
		// $scope.items1 = [1,2,3,4,5,6,7,8,9];
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


