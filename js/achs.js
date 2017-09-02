$(document).ready(function() {    
    $(".images").slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        lazyLoad: "ondemand"
    });
    
    $("#calendarToggle").click(function() {
        $("#calendar").toggle(500, function() {
            if ($(this).is(":visible")) {
                $("#calendarToggle").text("Hide calendar");
            } else {
                $("#calendarToggle").text("View calendar");
            }
        });
    });
    
    getPets();
});