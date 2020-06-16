$(document).ready(() => {
    //BURGER//
    $(".connector").click(() => {
        $(".connector").toggleClass("isActiveBurger");
    });
    $(".hero-slider").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        pauseOnHover: true,
    });
    $(".p-items-slider").slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    });
});
