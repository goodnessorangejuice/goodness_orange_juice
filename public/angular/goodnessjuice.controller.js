(function () {
    'use strict';
    angular.module("goodnessJuice")
        .controller("headerController", headerController)
        .controller("noSlideHeaderController", noSlideHeaderController)
        .controller("imageTiltController", imageTiltController)
        .controller('stockistFormController', stockistFormController)
        .component("headerSection", {
            templateUrl: "/angular/home.html",
            controller: headerController

        })
        .controller('mailingListController', mailingListController)
        .component("noSlide", {
            templateUrl: "/angular/faqheader.html",
            controller: noSlideHeaderController
        })
        .controller("imageTilt", {
            templateUrl: "/angular/no_slide.html",
            controller: imageTiltController
        })
        .component('mailingList', {
            templateUrl: '/angular/mailUs.html',
            controller: 'mailingListController as mail'
        })
    .component('stockistForm',{
        templateUrl: '/angular/stockistForm.html',
        controller: 'stockistFormController as stockist'
    });

    imageTiltController.$inject = ["$element"];

    function imageTiltController($element) {
        var $ctrl = this;
        // console.log("Image Tilt Element",$element);

        var tiltElement = $element.find(".js-tilt");

        tiltElement.tilt({
            reset: false,
            maxTilt: 20,
            perspective: 1000
        })
        $('.effect').tilt({
            reset: false,
            maxTilt: 20,
            perspective: 1000
        })

    }


    headerController.$inject = ['$element']

    function headerController($element) {
        var $ctrl = this;


        $ctrl.$postLink = function () {
            // console.log("$element",$element);


            var owl = $element.find('.owl-carousel');
            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                smartSpeed: 400,
                animateIn: 'fadeInRight',
                animateOut: 'fadeOutLeft'
            });
        }
    }


    noSlideHeaderController.$inject = ["$element"];

    function noSlideHeaderController($element) {
        var $ctrlh = this;

        $ctrlh.user = {};

        $ctrlh.$postLink = function () {
            console.log("In noSlideHeaderController element", $element);

            // new WOW().init();

            $(function () {
                Typed.new(".elements", {
                    strings: ["Goodness For Everybody!", "Share The Goodness...", "Nothing tastes as good!"],
                    typeSpeed: 30,
                    loop: true,
                    margin: 0
                });
            });
        };
    }


    mailingListController.$inject = ['$http'];

    function mailingListController($http) {
        var mail = this;
        mail.email = {
            address: ''
        };
        mail.emailAdd = function () {
            $http({
                method: 'post',
                url: "/insert",
                params: {
                    email: mail.email.address
                }
            });
        }
        
        mail.$postLink = function(){
            var subscribe = document.getElementById('subscribe');
            
            subscribe.addEventListener('click',function(e){
//               console.log(e.target);
                subscribe.setAttribute('disabled',true);
                location.reload();
            });
        }

    }
    
    stockistFormController.$inject = ['$http'];
    function stockistFormController($http){
        var stockist = this;
        
        stockist.bio = {
            name: '',
            email: '',
            BusinessAddress: '',
            phoneNumber: '',
            feedBack: ''
            
        };
        
//        var objData = stockist.bio;
        
        stockist.submit = function(){
          
         $http({
                method: 'post',
                url: "/stockist_application",
                params: {
                    name: stockist.bio.name,
                    email: stockist.bio.email,
                    BusinessAddress: stockist.bio.BusinessAddress,
                    phoneNumber: stockist.bio.phoneNumber,
                    feedBack: stockist.bio.feedBack
                }
            });  
            
            stockist.bio = {
            name: '',
            email: '',
            BusinessAddress: '',
            phoneNumber: '',
            feedBack: ''
            
        };
            
        };
        
       
        
        
        stockist.$postLink = function(){
            var stockistButton = document.getElementById('stockistButton');
            
            stockistButton.addEventListener('click',function(e){
//               console.log(e.target);
                stockistButton.setAttribute('disabled',true);
                location.reload();
            });
        }
    }

})();
