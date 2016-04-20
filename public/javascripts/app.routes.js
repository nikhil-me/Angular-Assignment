angular.module('youtubeApp')
.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider, $stateParams) {
      $urlRouterProvider.otherwise('/main');
      $stateProvider
        .state('main', {
          url: '/main',
          templateUrl: '/views/main.html',
          controller : "MediumController"
        })
        .state('video', {
          url: '/video/:link',
          templateUrl: '/views/video.html',
          controller : "videoController",
          resolve :{
             videolink : function($stateParams){
              return $stateParams.link;
            }
          }
        });
     }
   ]);