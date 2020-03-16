$(function() {
    var day = $('#selectable').find('li');
    var showDay = $('#showDay');

    day.on('click', function() {
        $(this).addClass('clicked');
        showDay.text($(this).text());
    });
});