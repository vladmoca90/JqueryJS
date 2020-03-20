$(function () {
    var day = $('#selectable').find('li');
    var showDay = $('#showDay');
    var exclude = $('#exclude');

    if (day.length == 0) {
        throw new Error('The list must be provided');
    }

    day.on('click', function () {
        $(this).addClass('clicked').siblings().removeClass('clicked');
        showDay.text($(this).text());
    });

    exclude.on('change', function () {
        if (this.checked) {
            for (var i = 0; i < day.length; i++) {
                let weekend = day.eq(i);

                if (weekend.text() === 'Saturday' || weekend.text() === 'Sunday') {
                    weekend.addClass('disable-day');
                    weekend.removeClass('clicked');
                    // showDay.text(day.hide());
                } else {
                    // showDay.text(day.text());
                }
            }
        } else {
            day.removeClass('disable-day');
        }
    });
});