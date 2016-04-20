angular.module('youtubeApp',['ngProgress','ui.router'])
	.controller("MainCtrl",["$http","$scope","ngProgressFactory",function($http,$scope,ngProgressFactory){
		$scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.progressbar.complete();
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


