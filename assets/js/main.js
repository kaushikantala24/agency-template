console.log('Agency Template Loaded');

//header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 90) {
        $(".header-main").addClass("darkHeader");
    } else {
        $(".header-main").removeClass("darkHeader");
    }
});