(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        ///////////////////////owl carousel start///////////////////////////////////////
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            smartSpeed: 450,
            animateIn: 'fadeInRight',
            animateOut: 'fadeOutLeft'
        });

        ///////////////////////////////////////////////////////////





        ///////////scroll navigation start//////////////

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                $(".navbar").addClass("visible");
                $(".navbar-nav > li > a").css('color', '#fff');
                $(".navbar").css('box-shadow', '0px 5px 10px rgba(0, 0, 0, 0.20)', 'top', '0px');
            } else {
                $(".navbar").removeClass("visible");
                $(".navbar-nav > li > a").css('color', '#fff');
                $(".navbar").css('box-shadow', '0px 0px 0px rgba(0, 0, 0, 0.0)');
            }

        });
        ///////////scroll navigation end//////////////

        /////////////footer image pop up////////////////////

        $('.single-image-blog').magnificPopup({
            delegate: 'img', // child items selector, by clicking on it popup will open
            type: 'image',
            // other options
        });
        /////////////footer image popup////////////////////

        //////////youtube play video start///////////////
        $('.play-now').magnificPopup({
            items: {
                src: 'https://www.youtube.com/watch?v=fvX8SQdVeps'
            },
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?autoplay=1'
                    }
                },
                srcAction: 'iframe_src',
            }
        });
        ////////////////Youtube video end//////////////////////////

        /////////////preloader start///////////////

        // $("#fakeLoader").fakeLoader({

        //     timeToHide: 2000, //Time in milliseconds for fakeLoader disappear
        //     zIndex: "999", //Default zIndex
        //     spinner: "spinner4", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
        //     bgColor: "#0841cd", //Hex, RGB or RGBA colors
        // });
        /////////////preloader end///////////////
    });

    $('.js-tilt').tilt({
        reset: false,
        maxTilt: 20,
        perspective: 1000
    })
    $('.effect').tilt({
        reset: false,
        maxTilt: 20,
        perspective: 1000
    })


    ////////smoth scroling navigation start//////////////

    // $('#nav').onePageNav({
    //     currentClass: 'current',
    //     changeHash: false,
    //     scrollSpeed: 1000,
    //     scrollThreshold: 0.5,
    //     filter: '',
    //     easing: 'swing',
    //     begin: function () {
    //         //I get fired when the animation is starting
    //     },
    //     end: function () {
    //         //I get fired when the animation is ending
    //     },
    //     scrollChange: function ($currentListItem) {
    //         //I get fired when you enter a section and I pass the list item of the section
    //     }
    // });

    ////////smoth scroling navigation end//////////////






}(jQuery));