$(document).ready(function() {
/*----Fixed nav scroll----*/
    $('.nav-quiz-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    }, {
        offset: '60px'
    });

/*----Mobile nav toggle----*/
    $('.mobile-icon-js').click(function() {
        var nav = $('.main-nav-js');
        var icon = $('.mobile-icon-js i');

        nav.slideToggle(200);

        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-xmark');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-xmark');
        }
    });

    
});