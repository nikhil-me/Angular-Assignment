angular.module('youtubeApp')
	.controller("videoController",["$http","$scope","ngProgressFactory",function($http,$scope,ngProgressFactory){
		// console.log("hi");	
		$scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.progressbar.complete();
		$scope.items1 = [1,2,3,4,5,6,7,8,9];
	}])