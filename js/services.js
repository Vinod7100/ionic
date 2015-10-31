angular.module('starter.services', [])

.factory('Posts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var posts = [{
    id: 0,
    name: 'Ben Sparrow',
    posted_on: 'November 05, 1955',
    face: 'http://ionicframework.com/img/docs/mcfly.jpg',
	post_type: 'image',
	post_featured_img: 'http://ionicframework.com/img/docs/delorean.jpg',
	post_content: 'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer.'
  }, {
    id: 1,
    name: 'Ben Sparrow',
    posted_on: 'November 05, 1955',
    face: 'http://ionicframework.com/img/docs/mcfly.jpg',
	post_type: 'image',
	post_featured_img: 'http://ionicframework.com/img/docs/delorean.jpg',
	post_content: 'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer.'
  }, {
    id: 2,
    name: 'Ben Sparrow',
    posted_on: 'November 05, 1955',
    face: 'http://ionicframework.com/img/docs/mcfly.jpg',
	post_type: 'image',
	post_featured_img: 'http://ionicframework.com/img/docs/delorean.jpg',
	post_content: 'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer.'
  }, {
    id: 3,
    name: 'Ben Sparrow',
    posted_on: 'November 05, 1955',
    face: 'http://ionicframework.com/img/docs/mcfly.jpg',
	post_type: 'image',
	post_featured_img: 'http://ionicframework.com/img/docs/delorean.jpg',
	post_content: 'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer.'
  }, {
    id: 4,
    name: 'Ben Sparrow',
    posted_on: 'November 05, 1955',
    face: 'http://ionicframework.com/img/docs/mcfly.jpg',
	post_type: 'image',
	post_featured_img: 'http://ionicframework.com/img/docs/delorean.jpg',
	post_content: 'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer.'
  }];

  return {
    all: function() {
      return posts;
    },
    remove: function(post) {
      posts.splice(chats.indexOf(post), 1);
    },
    get: function(postId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(postId)) {
          return posts[i];
        }
      }
      return null;
    }
  };
})



.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
