$(function () {
    var day = $('#selectable').find('li');
    var showDay = $('#showDay');
    var exclude = $('#exclude');

    day.on('click', function () {
        $(this).addClass('clicked').siblings().removeClass('clicked');
        showDay.text($(this).text());
    });

    exclude.on('change', function () {
        var content = day.text();
        exclude.attr('checked', 'checked');

        if (exclude.prop('checked')) {
            if (content === 'Saturday' || content === 'Sunday') {
                day.addClass('disable-day');
            }
        }
    });
});

//  if (day.text() === 'Saturday' || day.text() === 'Sunday') {
//     day.addClass('disable-day');
// }