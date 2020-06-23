export default class LoadMore {
    startLoad(trigger, element) {
        $(trigger).click(() => {
            $(element).fadeIn(600);
            $(trigger).hide();
        });
    }
}
