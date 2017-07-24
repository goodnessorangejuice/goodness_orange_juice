(function(){
	'use strict';
	angular.module("goodnessJuice",['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state("home",{
			url:"/",
			// templateUrl: "../views/home.html"
			views:{
			'header':{templateUrl:"/angular/home.html",controller:"headerController"},
			'body':{templateUrl:"/angular/body.html"}
			}
		})
		.state("insert",{
			url:"/insert",
			})
		.state("delivery_service",{
			url:"/delivery_service",
			views:{
				'header' : {templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' :   {templateUrl:"/angular/deliverybody.html"}
			}
		})
		.state("faq",{
			url:"/faq",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/faqbody.html"}
			}
		})
		.state("goodness_orange_juice",{
			url:"/goodness_orange_juice",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/goodness_orange_juicebody.html"}
			}
		})
		.state("goodness_process",{
			url:"/goodness_process",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/goodness_processbody.html"}
			}
		})
		.state("goodness_promise",{
			url:"/goodness_promise",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/goodness_promisebody.html"}
			}
		})
		.state("goodness_story",{
			url:"/goodness_story",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/goodness_storybody.html"}
			}
		})
		.state("goodness_team",{
			url:"/goodness_team",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/goodness_teambody.html"}
			}
		})
		.state("how_to_order",{
			url:"/how_to_order",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/how_to_orderbody.html"}
			}
		})
		.state("kegr",{
			url:"/kegr",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/kegrbody.html"}
			}
		})
		.state("stockist",{
			url:"/stockist",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/stockistbody.html"}
			}
		})
        .state("buy_on_line",{
			url:"/buy_on_line",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/buy_on_line.html"}
			}
		})
        .state("contact_us",{
			url:"/contact_us",
			views:{
				'header':{templateUrl:"/angular/no_slide.html",controller:"noSlideHeaderController"},
				'body' : {templateUrl:"/angular/contact_us.html"}
			}
		});
		//  $urlRouterProvider.html5Mode(true);
		//   $locationProvider.hashPrefix('');
	});

})();









