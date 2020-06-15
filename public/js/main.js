$(document).ready(() => {
    //BURGER//
    $(".connector").click(() => {
        $(".connector").toggleClass("isActiveBurger");
    });
    $(".hero-slider").slick({
        arrows: false,
        dots: true,
    });
});
