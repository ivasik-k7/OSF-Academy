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
