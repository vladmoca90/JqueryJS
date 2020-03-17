$(function () {
    var day = $('#selectable').find('li');
    var showDay = $('#showDay');
    var exclude = $('#exclude');

    day.on('click', function () {
        $(this).addClass('clicked').siblings().removeClass('clicked');
        showDay.text($(this).text());
    });

    exclude.on('change', function () {
        exclude.attr('checked', 'checked');

        if (exclude.prop('checked')) {
            for (var i = 0; i < day.length; i++) {
                var content = day.eq(i).text();

                if (content === 'Saturday' || content === 'Sunday') {
                    day.addClass('disable-day');
                } else {
                    day.removeClass('disable-day');
                }
            }
        }
    });
});

//  if (day.text() === 'Saturday' || day.text() === 'Sunday') {
//     day.addClass('disable-day');
// }