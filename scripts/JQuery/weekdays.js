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
            day.removeClass('clicked');
            day.removeClass('disable-day');

            // if(day.hasClass('disable-day') == true) {
            //     return showDay.html(' ');
            // }

            showDay.show();
        }
    });
});