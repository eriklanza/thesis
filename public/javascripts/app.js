var app = angular.module('thesis', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])
.factory('posts' [function(){
  var o ={
    posts: [{title: 'Hello', link:'', upvotes:0}]
  };
  return o;
}])
.controller('MainCtrl',[
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if (!$scope.title || $scope.title === ''){return;};
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes:0});
      $scope.title = '';
      $scope.link = '';
    }
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }]);
