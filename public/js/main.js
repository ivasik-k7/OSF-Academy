$(document).ready(() => {
    //BURGER//
    $(".connector").click(() => {
        $(".connector").toggleClass("isActiveBurger");
    });

    //SLIDERS
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
    $(".featured-slider").slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        draggable: false,
        prevArrow: ".slick-prev",
        nextArrow: ".slick-next",
    });
    //CARD-HOVER
    $(".p-items-product").on("click", function () {
        $(this).prev().css("visibility", "visible");
        $(this).prev().prev().css("display", "block");
    });
    $(document).click(function (e) {
        const $card = $(".p-items-load__item");
        if (!$card.is(e.target) && $card.has(e.target).length === 0) {
            $(".p-items-backdrop").css("display", "none");
            $(".p-items-control").css("visibility", "hidden");
        }
    });

    //LOAD-MORE
    $(".load-more").click(() => {
        $(".p-items-hided").fadeIn(600);
        $(".load-more").fadeOut(300);
    });
});
