
angular.module("app",['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	.state("app",{
		url:"/",
		views:{
			// 'header':{templateUrl:'views/header.html'},
			'content':{templateUrl:'views/content.html'},
			'footer':{templateUrl:'views/footer.html',controller:'myTimeController'}
		}
		});
	
	$urlRouterProvider.otherwise('/');
});