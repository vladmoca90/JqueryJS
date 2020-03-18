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
            for (var i = 0; i < day.length; i++) {
                let weekend = day.eq(i).text();
                if (weekend === 'Saturday') {
                    day.addClass('disable-day');
                } else {
                    day.removeClass('disable-day');
                }
            }
        }
    });
});