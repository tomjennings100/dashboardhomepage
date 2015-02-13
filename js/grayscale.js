//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".curationlogo").fadeOut();
        $(".navbar-brand").fadeIn();
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".curationlogo").show();
        $(".navbar-brand").hide();
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function () {

    function showDiv(span) {
        span.transition({
            opacity: 1
        }, 700, function () {
            //call back
            showDiv(span.next("span.oneaftertheother"));
        });
    }

  window.setTimeout(showDiv($('span.oneaftertheother:first')), 3000);
});
