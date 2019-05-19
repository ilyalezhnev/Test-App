angular.module('testApp', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'page_1.html'
    })
    .when('/page_2', {
      templateUrl: 'page_2.html'
    })
    .when('/page_3', {
      templateUrl: 'page_3.html'
    })
});