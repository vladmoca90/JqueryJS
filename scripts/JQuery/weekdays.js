$(function () {
    const day = $('#selectable').find('li');
    const showDay = $('#showDay');
    const exclude = $('#exclude');

    day.on('click', function () {
        $(this).addClass('clicked').siblings().removeClass('clicked');
        showDay.text($(this).text());
    });

    exclude.on('change', function () {
        exclude.attr('checked', 'checked');
        if (exclude.is(':checked')) {
            day.addClass('disable-day');
        }
    });
});

//  if (day.text() === 'Saturday' || day.text() === 'Sunday') {
//     day.addClass('disable-day');
// }