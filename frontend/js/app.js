$(document).ready(function() {

    // Mobile menu
    $('.mobile-menu-tog').after('<div id="mobile-menu"></div>');
    $('#main-nav').find('ul').clone().appendTo('#mobile-menu');

    var $menu = $('#mobile-menu'),
        $html = $('html, body');

    $('#mobile-menu').mmenu({
        extensions 	: [ "pageshadow" ],
        offCanvas	: {
            position 	: "right",
            zposition	: "front"
        },
        navbar: false
    });

    var API = $menu.data( "mmenu" );
    API.setSelected( $menu.find( "li" ).first() );

    var closer = null;

    $('.mobile-menu-tog-bot').on( 'click', function() {
        closer = $(this).attr( "href" );
        $('.mobile-menu-tog').toggleClass('active');
    });

    API.bind( "closed", function() {
        if ( closer ) {
            setTimeout( function() {
                $html.animate({
                    scrollTop: $(closer).offset().top
                });
                closer = null;
                $('.mobile-menu-tog').removeClass('active');
            }, 25 );
        }
    });

    // Wow init
    new WOW().init({
        mobile: false
    });

    // Product page line animate
    setTimeout(function () {
        $('.page-product__img-line3').slideDown(1200);
    }, 2200);

    $(window).scroll(function () {
        var schema = $(".how-does-platform").offset().top;
        if ($(this).scrollTop() > (schema - 550)) {
            $('.arrow-1').animate({
                width: '120px'
            }, 600);

            setTimeout(function() {
                $('.arrow-2').animate({
                    width: '120px'
                }, 600);
            }, 700)

            setTimeout(function() {
                $('.arrow-3').animate({
                    width: '120px'
                }, 600);
            }, 1400)

            setTimeout(function() {
                $('.arrow-4-1, .arrow-4-2').animate({
                    height: '66px'
                }, 600);
            }, 2100)

            setTimeout(function() {
                $('.arrow-5').animate({
                    width: '285px'
                }, 600);
            }, 2800)
        }
    });
    
});
