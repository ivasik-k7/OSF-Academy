import "../scss/styles.scss";
import img from "../img/banner-home.png";

$(document).ready(() => {
    //COOKIE
    function hideCookie() {
        $(".cookie").fadeOut(400);
    }
    $(".cookie-accept").on("click", () => {
        hideCookie();
    });
    $(".cookie-close").on("click", () => {
        hideCookie();
    });
    //DROPDOWN
    $(".header-menu li:first-child a").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active-droplink");
        $("body").css("overflow-x", "hidden");
        $(".dropdown-menu").slideToggle();
    });
    //BURGER
    $(".connector").click(() => {
        $(".connector").toggleClass("isActiveBurger");
        $(".header-menu").toggleClass("show", "animated");
    });
    //BACK-TO-TOP
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $(".to-top").fadeIn(600);
        } else {
            $(".to-top").fadeOut(300);
        }
    });
    $(".to-top").on("click", () => {
        $("html, body").animate({scrollTop: 0}, 700);
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
    //FOOTER-TAB
    $(document).width() > 1280
        ? null
        : $(".footer-title").on("click", function () {
              $(this).toggleClass("footer-title-active");
              $(this).next().slideToggle();
          });

    //LOGIN
    $('a[title="Login"]').click((e) => {
        e.preventDefault();
        $(".login").fadeIn(300);
    });
});
