import "../scss/styles.scss";
import "./modules/filters";
import "./modules/timer";
import CardsBackdrop from "./modules/cards-backdrop";
import SlickSlider from "./modules/slider";
import LoadMore from "./modules/load-more";

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

    //FILTER
    ////COLORS
    $(".colors > div").on("click", function () {
        $(".colors > div").removeClass("active-color");
        $(this).addClass("active-color");

        function setStockColors() {
            $label.css("color", "#45413e");
            $label.next().css("color", "#45413e");
        }

        const $attr = $(this).attr("data-color");
        const $body = $(".filter-body");

        if ($attr == "black") {
            $body.removeClass();
            $body.addClass("active-black filter-body");
        } else if ($attr == "skyblue") {
            $body.removeClass();
            $body.addClass("active-skyblue filter-body");
        } else if ($attr == "green") {
            $body.removeClass();
            $body.addClass("active-green filter-body");
        } else if ($attr == "blue") {
            $body.removeClass();
            $body.addClass(`active-blue filter-body`);
        } else if ($attr == "orange") {
            $body.removeClass();
            $body.addClass("active-orange filter-body");
        } else if ($attr == "red") {
            $body.removeClass();
            $body.addClass("active-red filter-body");
        } else if ($attr == "creme") {
            $body.removeClass();
            $body.addClass("active-creme filter-body");
        } else {
            $body.removeClass();
            $body.addClass("active-white filter-body");
        }
    });
    ////PRICE
    $("#price").on("change", (e) => {
        console.log(e.target.value);
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
    const slider = new SlickSlider();
    slider.startSlider(".featured-slider", true, false, 4, 2, false, false);
    slider.startSlider(".hero-slider", false, true, 1, 1);
    slider.startSlider(".p-items-slider", false, true, 1, 1);

    //CARD-HOVER
    const cb = new CardsBackdrop();
    cb.render(".p-items-product", ".p-items-backdrop", ".p-items-control");
    cb.render(".products-card__title", ".products-card__backdrop", ".products-card__control");
    //LOAD-MORE
    const load = new LoadMore();
    load.startLoad(".load-more", ".p-items-hided");
    load.startLoad(".products-load button", ".load-hide");
    //HIDE FILTER
    const $filterHideButton = $(".filter-hide .hide");
    $filterHideButton.click(() => {
        $(".filter-body").fadeOut(450);
        $filterHideButton.hide(500);
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
