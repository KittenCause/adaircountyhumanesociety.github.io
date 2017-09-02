$(document).ready(function() {    
    $(".images").slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        lazyLoad: "ondemand"
    });
    
    getPets();
});