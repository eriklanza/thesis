var app = angular.module('Thesis', []);

app.controller('MainCtrl',[
  '$scope',
  function($scope){
    $scope.post = [
      'post 1',
      'post 2',
      'post 3',
      'post 4'
    ];
  }]);
