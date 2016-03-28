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
  $stateProvider
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
  });
  $urlRouterProvider.otherwise('home');
}]);
app.factory('posts' [function(){
  var o ={
    posts: [{title: 'Hello', link:'', upvotes:0}]
  };
  return o;
}]);
app.controller('MainCtrl',[
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;

    posts.addPost = function() {
      if (!posts.title || posts.title === ''){return;};
      posts.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes:0});
      posts.title = '';
      posts.link = '';
    }
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }]);
