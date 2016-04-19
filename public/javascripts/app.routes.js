angular.module('youtubeApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/', {

		templateUrl: '/views/main.html',
	})
	.when('/video',{
		templateUrl: '/views/video.html'
	})
	.otherwise('/');

});