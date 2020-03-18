$(function () {
    var day = $('#selectable').find('li');
    var showDay = $('#showDay');
    var exclude = $('#exclude');

    if(day.length == 0) {
        throw new Error('The list must be provided');
    }

    day.on('click', function () {
        $(this).addClass('clicked').siblings().removeClass('clicked');
        showDay.text($(this).text());
    });

    exclude.on('change', function () {
        if (this.checked) {
            for(var i = 0; i < day.length; i++) {
                if(day.eq(i).text() === 'Saturday' || day.eq(i).text() === 'Sunday') {
                    day.eq(i).addClass('disable-day');
                }
            }
        }
    });
});