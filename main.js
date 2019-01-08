$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    console.log("scroll height: " + scroll)

    if (scroll >= 770) {
        $("nav ul li a").addClass("darkNav");
    } else {
        $("nav ul li a").removeClass("darkNav");
    }
});
