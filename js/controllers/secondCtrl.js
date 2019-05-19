angular.module('testApp')
  .controller('secondCtrl', function($scope, myFactory) {

    console.log(myFactory.name);
  });