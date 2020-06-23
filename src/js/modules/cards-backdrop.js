export default class CardsBackdrop {
    render(trigger, backdrop, control) {
        $(trigger).on("click", function () {
            $(this).prev().css("visibility", "visible");
            $(this).prev().prev().css("display", "block");
        });
        $(document).click(function (e) {
            const $card = $(trigger);
            if (!$card.is(e.target) && $card.has(e.target).length === 0) {
                $(backdrop).css("display", "none");
                $(control).css("visibility", "hidden");
            }
        });
    }
}
