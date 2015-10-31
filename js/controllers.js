angular.module('starter.controllers', [])

.controller('TabCtrl', function($scope, Posts, $ionicPopover) {
	
	$scope.posts = Posts.all();
	
	$ionicPopover.fromTemplateUrl('templates/menu.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }
  
})

.controller('DashCtrl', function($scope, Posts, $ionicPopover) {
	
	$scope.posts = Posts.all();
  
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('PostCommentCtrl', function($scope, $stateParams) {
  $scope.postId = $stateParams.postId;
  $scope.comments = [{
    id: 0,
    name: 'Ben Sparrow',
    commented_on: 'November 05, 1955',
    face: 'http://ionicframework.com/img/docs/mcfly.jpg',
	text: 'This is a "Facebook" styled Card'
  }, {
    id: 1,
    name: 'Ben Sparrow',
    commented_on: 'November 05, 1955',
    face: 'http://ionicframework.com/img/docs/mcfly.jpg',
	text: 'This is a "Facebook" styled Card'
  }, {
    id: 2,
    name: 'Ben Sparrow',
    commented_on: 'November 05, 1955',
    face: 'http://ionicframework.com/img/docs/mcfly.jpg',
	text: 'This is a "Facebook" styled Card'
  }, {
    id: 3,
    name: 'Ben Sparrow',
    commented_on: 'November 05, 1955',
    face: 'http://ionicframework.com/img/docs/mcfly.jpg',
	text: 'This is a "Facebook" styled Card'
  }, {
    id: 4,
    name: 'Ben Sparrow',
    commented_on: 'November 05, 1955',
    face: 'http://ionicframework.com/img/docs/mcfly.jpg',
	text: 'This is a "Facebook" styled Card'
  }];
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('RegistrationCtrl', function($scope) {
  
})

.controller('RecoverCtrl', function($scope) {
  
})

.controller('LoginCtrl', function($scope, $timeout, $state) {
	// Form data for the login modal
	$scope.loginData = {};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
			$state.go('tab.dash')
		}, 1000);
	};
});
