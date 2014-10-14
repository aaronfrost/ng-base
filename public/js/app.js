angular.module('baseApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/',{ controller: 'startCtrl', templateUrl: 'js/start/start.html' })
        .when('/show-hide',{ controller: 'showHideCtrl', templateUrl: 'js/show-hide/show-hide.html' })
        .when('/contact',{ templateUrl: 'js/contact/contact.html' })

  })