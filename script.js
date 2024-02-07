$(document).ready(function () {
    $('.burgermenu').on('click', function () {
        $('.nav-option').toggle();
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
    })
});

