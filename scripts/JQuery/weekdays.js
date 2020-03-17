$(function () {
    var day = $('#selectable').find('li');
    var showDay = $('#showDay');
    var exclude = $('#exclude');

    day.on('click', function () {
        $(this).addClass('clicked').siblings().removeClass('clicked');
        showDay.text($(this).text());
    });

    exclude.on('change', function () {
        if (this.checked) {
            day.addClass('disable-day');
            showDay.hide();
        } else {
            day.removeClass('disable-day');
            day.removeClass('clicked');
            showDay.show();
        }
    });
});