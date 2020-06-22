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
    //TIMER//
    function getTimeRemaining(finish) {
        const $t = Date.parse(finish) - Date.parse(new Date());
        const $sec = Math.floor(($t / 1000) % 60);
        const $min = Math.floor(($t / 1000 / 60) % 60);
        const $hrs = Math.floor(($t / (1000 * 60 * 60)) % 24);
        const $dys = Math.floor(($t / (1000 * 60 * 60 * 24)) % 7);
        const $wks = Math.floor($t / (1000 * 60 * 60 * 24 * 7));
        return {
            $t,
            $sec,
            $min,
            $hrs,
            $dys,
            $wks,
        };
    }
    function timerPreferences(el, deadline = "2020-07-01") {
        const $timer = $(el);
        const $seconds = $timer.find("#seconds .val");
        const $minutes = $timer.find("#minutes .val");
        const $hours = $timer.find("#hours .val");
        const $days = $timer.find("#days .val");
        const $weeks = $timer.find("#weeks .val");
        const clockInterval = setInterval(updateTimer, 1000);
        updateTimer();

        function zeroFormat(num) {
            if (num < 10) {
                return "0" + num;
            } else {
                return num;
            }
        }

        function updateTimer() {
            const time = getTimeRemaining(deadline);
            $seconds.html(zeroFormat(time.$sec));
            $minutes.html(zeroFormat(time.$min));
            $hours.html(zeroFormat(time.$hrs));
            $days.html(zeroFormat(time.$dys));
            $weeks.html(zeroFormat(time.$wks));

            if (time.$t <= 0) {
                $seconds.html("00");
                $minutes.html("00");
                $hours.html("00");
                $days.html("00");
                $weeks.html("00");

                clearInterval(clockInterval);
            }
        }
    }
    timerPreferences(".release-timer");
});
