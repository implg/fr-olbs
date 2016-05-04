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

    // Wow init
    new WOW().init({
        mobile: false
    });

    // Product page line animate
    setTimeout(function () {
        $('.page-product__img-line3').slideDown(700);
    }, 1900);

    $("#main-nav a[href*='#'], #mobile-menu a[href*='#'], .footer__nav a[href*='#']").mPageScroll2id();

    // Ajax form send
    $('.form-contacts').on('submit', function(e) {
        e.preventDefault();
        $('.form-error, .form-success').remove();
        $.ajax({
            type: "POST",
            url: "./mail.php",
            data: $(this).serialize(),
            success: function(msg){
                $('.form-contacts').before('<p class="form-success">' + msg + '</p>');
                $('.form-contacts')[0].reset();
            },
            error: function(){
                $('.form-contacts').before('<p class="form-error">Ваше сообщение не отправлено!</p>');
            }
        });
    });
    
});
