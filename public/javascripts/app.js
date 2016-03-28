var app = angular.module('Thesis', []);

app.controller('MainCtrl',[
  '$scope',
  function($scope){
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 8},
      {title: 'post 3', upvotes: 2},
      {title: 'post 4', upvotes: 3}
    ];
    $scope.addPost = function() {
      if (!$scope.title || $scope.title === ''){return;};
      $scope.posts.push({title: $scope.title, upvotes:0});
      $scope.title = '';
    }
    $scope.incrementUpvotes = function() {
      post.upvotes += 1;
    }
  }]);
