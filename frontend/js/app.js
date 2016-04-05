$(document).ready(function() {

    // Mobile menu
    $('.mobile-menu-tog').after('<div id="mobile-menu">');
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
});
