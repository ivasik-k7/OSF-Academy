const $mobileElems = $(".products-card:not(.mobile-hide)");
const $tableElems = $(".products-card:not(.load-hide)");

$("#price").on("change", function (e) {
    const $targ = $(this).val();
    console.log($targ);
});
