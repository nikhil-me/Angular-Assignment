angular.module('youtubeApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/main', {

		templateUrl: '/views/main.html',
		controller: "MediumController"
		
	})
	.when('/video',{
		templateUrl: '/views/video.html',
		controller : "videoController"
	})
	.otherwise('/main');
	console.log("routes");
});