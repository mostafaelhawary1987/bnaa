$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});

$(document).ready(function () {
    new WOW().init();


    ///////// **header** ///////// 
    if ($(window).width() >= 992) {
        if ($(this).scrollTop() >= 40) {
            $("body").addClass("header-scroll");
        } else {
            $("body").removeClass("header-scroll");
        }
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 40) {
                $("body").addClass("header-scroll");
            } else {
                $("body").removeClass("header-scroll");
            }
        });
    }
    ///////// landing header /////////
    $('a[data-scroll^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = $(this).attr("data-scroll"),
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 500, 'swing');
        if ($(window).width() < 992) {
            $("nav").toggleClass("active");
            $("body").toggleClass("overflow");
            $(".menu-overlay").fadeToggle(400);
        }
    });

    ///////// **faq** ///////// 
    $('.faq-title').click(function () {
        $(".faq-title").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".faq-title").not(this).siblings().slideUp(500);
    })

    ///////// **course filter** ///////// 
    var $mediaElements = $('.course');
    $('.tabs-sec .tab-a').click(function (e) {
        e.preventDefault();
        var filterVal = $(this).data('filter');
        $(".tabs-sec .tab-a").not(this).removeClass("active");
        $(this).toggleClass("active");
        if (filterVal === 'all') {
            $mediaElements.show();
        } else {
            $mediaElements.hide().filter('.' + filterVal).show();
        }
    });

    ///////// **Testmonials Slider** ///////// 
    $('.testSlider').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            992: {
                items: 3,
            },
        }
    });
    ///////// **teacher Slider** ///////// 
    $('.teacherSlider').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });
    ///////// **blog Slider** ///////// 
    $('.blogSlider').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            },
        }
    });
    ///////// **menu** ///////// 
    if ($(window).width() < 992) {
        $('.menu-btn').click(function () {
            menu()
        });
        $('.overlay,.close-menu').click(function () {
            menu()
        });
    }
    ///////// **states 1** ///////// 
    if ($(window).width() < 767) {
        $('.states-grid').addClass("owl-carousel");
        $('.states-grid').owlCarousel({
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
            }
        });
    }
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".foot-head").addClass("mo-accordion");
        $(".foot-acc").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    ///////// **nums** /////////
    var a = 0;
    var b = 0;
    var c = 0;
    $(window).scroll(function () {
        if ($("div").hasClass("states-grid")) {
            if (a === 0 && $(this).scrollTop() >= ($(".about-sec .state").offset().top) - 500) {
                $('.about-sec .state-num').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1
            }

            if (b === 0 && $(this).scrollTop() >= ($(".state-sec .last-state").offset().top) - 500) {
                $('.last-state .state-num>span').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                b = 1
            }
        }
        if ($("div").hasClass("services-grid")) {
            if (c === 0 && $(this).scrollTop() >= ($(".service").offset().top) - 500) {
                $('.service .service-num>span').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                c = 1
            }
        }
    });

    $('.newsletter-btn').click(function () {
        $("body").addClass("overflow");
        $(".newsletter-response").fadeIn(400);
    });
    $('.newsletter-response,.modal-btn').click(function () {
        $("body").removeClass("overflow");
        $(".newsletter-response").fadeOut(400);
    });
    $('.modal-cont').click(function (e) {
        e.stopPropagation();
    });
});

menu = function () {
    $("nav").toggleClass("active");
    $("body").toggleClass("overflow");
    $(".menu-overlay").fadeToggle(400);
}