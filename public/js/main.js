$(document).ready(() => {
    //BURGER//
    $(".connector").click(() => {
        $(".connector").toggleClass("isActiveBurger");
    });
    $(".hero-slider").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    });
    $(".p-items-slider").slick({
        arrows: false,
        dots: true,
    });
});
