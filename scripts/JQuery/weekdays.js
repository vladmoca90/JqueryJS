$(function () {
    let day = $('#selectable').find('li');
    let showDay = $('#showDay');
    let exclude = $('#exclude');

    if (day.length == 0) {
        throw new Error('The list must be provided');
    }

    day.on('click', function () {
        $(this).addClass('clicked').siblings().removeClass('clicked');
        showDay.text($(this).text());
    });

    exclude.change(function() {
        if (this.checked) {
            for (let i = 0; i < day.length; i++) {
                let weekend = day.eq(i);

                if (weekend.text() === 'Saturday' || weekend.text() === 'Sunday') {
                    weekend.addClass('disable-day');
                    weekend.removeClass('clicked');
                    showDay.eq(i).text();
                }
            }
        } else {
            day.removeClass('disable-day');
        }
    });
});