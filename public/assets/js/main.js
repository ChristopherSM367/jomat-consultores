(function($) {

    'use strict';

    // loader
    var loader = function() {
        setTimeout(function() {
            if($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;

	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);
     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });
    $('.img-pop-home').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });
    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    //  Counter Js 

    if ($('.single-counter').length) {
      $('.counter').counterUp({
          delay: 10,
          time: 1000
      });    
    }
  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });
  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        // $('body').removeClass('lnr-cross');
        $('#mobile-nav-toggle i').removeClass('lnr-cross');
        // $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');

    });
  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space;
          }
        }
        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
          $('#mobile-body-overly').fadeOut();
          /*cierra X regresa barra menu*/
            $('#mobile-nav-toggle i').addClass('lnr lnr-menu');
        }
        return false;
      }
    }
  });
    /*MENU MOVIL*/
    $(document).ready(function(){
        $('.dropdown-menu p.dropdown-toggle').on('click', function(e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
            }
            var $subMenu = $(this).next('.dropdown-menu');
            $subMenu.toggleClass('show');


            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass('show');
            });


            return false;
        });
    });
    /*MENU MOVIL*/
    $(document).ready(function() {
    $('html, body').hide();
        if (window.location.hash) {
        setTimeout(function() {
        $('html, body').scrollTop(0).show();
        $('html, body').animate({
        scrollTop: $(window.location.hash).offset().top
        }, 1000)
        }, 0);
        }
        else {
        $('html, body').show();
        }
        var contentWayPoint = function() {
            var i = 0;
            $('.element-animate').waypoint( function( direction ) {

                if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {

                    i++;

                    $(this.element).addClass('item-animate');
                    setTimeout(function(){

                        $('body .element-animate.item-animate').each(function(k){
                            var el = $(this);
                            setTimeout( function () {
                                var effect = el.data('animate-effect');
                                if ( effect === 'fadeIn') {
                                    el.addClass('fadeIn element-animated');
                                } else if ( effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft element-animated');
                                } else if ( effect === 'fadeInRight') {
                                    el.addClass('fadeInRight element-animated');
                                } else {
                                    el.addClass('fadeInUp element-animated');
                                }
                                el.removeClass('item-animate');
                            },  k * 100);
                        });
                    }, 100);
                }
            } , { offset: '95%' } );
        };
        contentWayPoint();
    });
    $(document).ready(function() {
        $('html, body').hide();
        if (window.location.hash) {
            setTimeout(function() {
                $('html, body').scrollTop(0).show();
                $('html, body').animate({
                    scrollTop: $(window.location.hash).offset().top
                }, 1000)
            }, 0);
        }
        else {
            $('html, body').show();
        }
        var contentWayPoint2 = function() {
            var i = 0;
            // otro efecto
            $('.animate2').waypoint( function( direction ) {

                if( direction === 'down' && !$(this.element).hasClass('animate_animated2') ) {

                    i++;

                    $(this.element).addClass('item-animate');
                    setTimeout(function(){

                        $('body .animate2.item-animate').each(function(k){
                            var el = $(this);
                            setTimeout( function ()  {
                                var effect = el.data('animate-effect');
                                if ( effect === 'fadeInDown') {
                                    el.addClass('fadeInDown animate_animated2');
                                } else if ( effect === 'fadeInDownLeft') {
                                    el.addClass('fadeInDown animate_animated2');
                                } else if ( effect === 'fadeInDownRight') {
                                    el.addClass('fadeInDown animate_animated2');
                                } else {
                                    el.addClass('fadeInDown animate_animated2');
                                }
                                el.removeClass('item-animate');
                            },  k * 100);
                        });
                    }, 100);
                }
            } ,
                { offset: '95%' } );
            // otro efecto
            $('.animate3').waypoint( function( direction ) {

                    if( direction === 'down' && !$(this.element).hasClass('animate_animated3') ) {

                        i++;

                        $(this.element).addClass('item-animate');
                        setTimeout(function(){

                            $('body .animate3.item-animate').each(function(k){
                                var el = $(this);
                                setTimeout( function ()  {
                                    var effect = el.data('animate-effect');
                                    if ( effect === 'zoomIn') {
                                        el.addClass('zoomIn animate_animated3');
                                    } else if ( effect === 'zoomIn') {
                                        el.addClass('zoomIn animate_animated3');
                                    } else if ( effect === 'zoomIn') {
                                        el.addClass('zoomIn animate_animated3');
                                    } else {
                                        el.addClass('zoomIn animate_animated3');
                                    }
                                    el.removeClass('item-animate');
                                },  k * 100);
                            });
                        }, 100);
                    }
                } ,
                { offset: '95%' } );
        };
        contentWayPoint2();
    });


  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 49) {
      $('#header').addClass('header-scrolled');
        $('.cajita_submenu').addClass('cajita_submenu_scrolled');
        $('.menualink').addClass('menualink-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
        $('.cajita_submenu').removeClass('cajita_submenu_scrolled');
        $('.menualink').removeClass('menualink-scrolled');
    }
  });
    $('.anclamenu').click(function(e){
        e.preventDefault();   //evitar el eventos del enlace normal
        var strAncla=$(this).attr('href'); //id del ancla
        $('body,html').stop(true,true).animate({
            scrollTop: $(strAncla).offset().top
        },1000);

    })
    $(".anclamenu").click(function(){
        $('#mobile-nav-toggle i').addClass('lnr lnr-menu');
    });

    // home slider
    $('.home-slider').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:true,
        autoplayHoverPause: true,
        items: 1,
        navText : ["<span class='ion-ios-arrow-thin-left'></span>","<span class='ion-ios-arrow-thin-right'></span>"],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true
            }
        }
    });

    // owl carousel
    var majorCarousel = $('.js-carousel-1');
    majorCarousel.owlCarousel({
        loop:true,
        autoplay: true,
        stagePadding:0,
        margin:30,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots:false,
        nav: true,
        autoplayHoverPause:true,
        items: 3,
        navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
        responsive:{
            0:{
                items:1,
                nav:false

            },
            600:{
                items:1,
                nav:true
            },
            800:{
                items:1,
                nav:true
            },
            1480:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
    // owl carousel
    var majorCarousel = $('.js-movil-1');
    majorCarousel.owlCarousel({
        loop:true,
        autoplay: true,
        stagePadding: 7,
        smartSpeed:1000,
        autoplayTimeout:1000,
        margin: 20,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots:false,
        nav: false,
        autoplayHoverPause: false,
        items: 2,
        navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:true
            }
        }
    });
    // owl carousel
    var majorCarousel = $('.js-carousel-1a');
    majorCarousel.owlCarousel({
        loop:true,
        autoplay: true,
        stagePadding:15,
        margin:30,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots:false,
        nav: true,
        autoplayHoverPause:true,
        items: 3,
        navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
        responsive:{
            0:{
                items:1,
                nav:false

            },
            600:{
                items:1,
                nav:false
            },
            800:{
                items:2,
                nav:false
            },
            1200:{
                items:2,
                nav:false,
                loop:true
            }
        }
    });
    // owl carousel
    var majorCarousel = $('.js-carousel-2');
    majorCarousel.owlCarousel({
        loop:true,
        autoplay: true,
        stagePadding:0,
        margin:30,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots:false,
        nav: true,
        autoplayHoverPause:true,
        items: 3,
        navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
        responsive:{
            0:{
                items:1,
                nav:false

            },
            600:{
                items:1,
                nav:false
            },
            800:{
                items:2,
                nav:false
            },
            1480:{
                items:3,
                nav:false,
                loop:true
            },
            1500:{
                items:4,
                nav:false,
                loop:true
            }
        }
    });
    // owl carousel
    var majorCarousel = $('.js-carousel-3');
    majorCarousel.owlCarousel({
        loop:true,
        autoplay: true,
        stagePadding:0,
        margin:30,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots:true,
        nav: true,
        autoplayHoverPause:true,
        items: 3,
        navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
        responsive:{
            0:{
                items:1,
                nav:false

            },
            600:{
                items:1,
                nav:false
            },
            800:{
                items:2,
                nav:false
            },
            1200:{
                items:3,
                nav:false,
                loop:true
            },
            1500:{
                items:4,
                nav:false,
                loop:true
            }
        }
    });
    // owl carousel
    var majorCarousel = $('.js-carousel-3b');
    majorCarousel.owlCarousel({
        loop:true,
        autoplay: true,
        stagePadding:0,
        margin:20,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed:1000,
        autoplayTimeout:1000,
        dots:false,
        nav: true,
        autoplayHoverPause:true,
        items: 1,
        navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            900:{
                items:4,
                nav:false
            },
            1400:{
                items:5,
                nav:false
            },
            1900:{
                items:7,
                nav:false,
                loop:true
            }
        }
    });
    var majorCarousel = $('.js-carousel-3c');
    majorCarousel.owlCarousel({
        loop:true,
        autoplay: true,
        stagePadding:0,
        margin:20,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed:1000,
        autoplayTimeout:1000,
        dots:false,
        nav: true,
        autoplayHoverPause:true,
        items: 1,
        navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            900:{
                items:4,
                nav:false
            },
            1400:{
                items:5,
                nav:false
            },
            1900:{
                items:5,
                nav:false,
                loop:true
            }
        }
    });
    // owl carousel
    var majorCarousel = $('.js-carousel-4');
    majorCarousel.owlCarousel({
        loop:true,
        autoplay: true,
        stagePadding:15,
        margin:40,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        // smartSpeed:1000,
        // autoplayTimeout:1000,
        dots:false,
        nav: true,
        autoplayHoverPause:true,
        items: 1,
        navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
    // owl carousel

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $("#toTop").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        $("html, body").animate({scrollTop: 0}, 1000);
    });





})(jQuery);
