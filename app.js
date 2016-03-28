var app = angular.module('Thesis', []);

app.controller('MainCtrl',[
  '$scope',
  function($scope){
    $scope.posts = [
      'post 1',
      'post 2',
      'post 3',
      'post 4'
    ];
  }]);
