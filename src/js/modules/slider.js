export default class SlickSlider {
    startSlider(selector, arrows = false, dots = true, show = 1, step, drag = true, autoplay = true) {
        $(selector).slick({
            dots: dots,
            infinite: true,
            arrows: arrows,
            speed: 500,
            slidesToShow: show,
            slidesToScroll: step,
            draggable: false,
            prevArrow: ".slick-prev",
            nextArrow: ".slick-next",
            adaptiveHeight: true,
            autoplay: autoplay,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            draggable: drag,
        });
    }
}
