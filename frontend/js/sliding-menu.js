$(document).ready(function(){
    var nav_wrap = $("#main-nav").find("ul"),
        elem_width,
        elem_left_offset,
        elem_parent,
        slider_line;

    $(window).load(function(){

        nav_wrap.each(function(){
            $(this).append('<li class="sliding-line"></li>');

            var start_elem_width = 0;
            var start_elem_offset = 0;
            var active_elem = $(this).find(".active");

            if(active_elem.length){
                start_elem_width = active_elem.outerWidth();
                start_elem_offset = active_elem.position().left;
            }

            $(this).find(".sliding-line").css({
                    "width": start_elem_width + "px",
                    "left": start_elem_offset + "px"
                })
                .data("width", start_elem_width)
                .data("left", start_elem_offset);
        });

    });

    nav_wrap.find("li a").hover(function(){

        elem_parent = $(this).parent();
        elem_width = elem_parent.outerWidth();
        elem_left_offset = $(this).position().left;
        slider_line = elem_parent.siblings(".sliding-line");
        slider_line.stop().animate({
            "width": elem_width + "px",
            "left": elem_left_offset + "px"
        });

    }, function(){

        slider_line.stop().animate({
            "width": slider_line.data("width") + "px",
            "left": slider_line.data("left") + "px"
        });

    });
});