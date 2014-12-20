var app = angular.module("blog", []);

app.controller("BlogCtrl",['$http', function($http) {

	this.posts = [];
	this.page = 1;
	this.newPost = {};

	this.reloadPosts = function(){
		$http.get('http://localhost:3000/api/posts')
			.success(function(data){
				this.posts = data;
			});
	};

	this.saveNewPost = function(){

		var that = this;

		this.posts.push(this.newPost);
		this.newPost = {};

		$http.post('/api/posts', this.newPost).
			success(function(){
			}).
			error(function(){
				that.newPost = that.posts.pop();
			});
	};

	


}]);
