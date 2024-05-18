$(document).ready(function () {

    $('.portafolio').slick({
         prevArrow:"<img class='a-left control-c prev slick-prev' src='img/slider_horizontal/izq.png'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='img/slider_horizontal/der.png'>",
        ltf: true,
        arrows: true,
        autoplaySpeed: 1,
        dots: false,
        autoplay: true,
        initialSlide: 0,
        mobileFirst: true,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint:  320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });

    $('.inicio').slick({
        ltf: true,
        arrows: true,
        autoplaySpeed: 1,
        dots: false,
        autoplay: true,
        initialSlide: 0,
        mobileFirst: true,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint:  320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.single-item-rtl').slick({
        ltf: true,
        arrows: true,
        autoplaySpeed: 1,
        dots: true,
        autoplay: true,
        initialSlide: 0,
        mobileFirst: true,
        pauseOnHover: true,
        autoplaySpeed: 8000,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint:  320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.patrocinadores').slick({
        ltf: true,
        arrows: false,
        autoplaySpeed: 1,
        dots: true,
        autoplay: true,
        initialSlide: 0,
        mobileFirst: true,
        pauseOnHover: true,
        autoplaySpeed: 8000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:  320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });





       $('.plantel').slick({
        ltf: true,
        arrows: false,
        autoplaySpeed: 1,
        dots: false,
        autoplay: true,
        initialSlide: 0,
        mobileFirst: true,
        pauseOnHover: true,
        autoplaySpeed: 8000,
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint:  320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });










    // On swipe event
    $('.single-item-rtl').on('swipe', function (event, slick, direction) {
        console.log(direction);
        // left
    });
});/**
 * Created by PC4 on 8/9/2017.
 */
