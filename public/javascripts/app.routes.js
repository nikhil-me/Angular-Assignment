angular.module('youtubeApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/', {

		templateUrl: '/views/main.html'
	})

	.otherwise('/');

});