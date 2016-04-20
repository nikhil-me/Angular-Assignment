angular.module('youtubeApp')
.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/main');
      $stateProvider
        .state('main', {
          url: '/main',
          templateUrl: '/views/main.html',
          controller : "MediumController"
        })
        .state('video', {
          url: '/video',
          templateUrl: '/views/video.html',
          controller : "videoController"
        });
     }
   ]);