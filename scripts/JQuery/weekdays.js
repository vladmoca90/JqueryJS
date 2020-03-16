$(function() {
    var day = $('#selectable').find('li');

    day.on('click', function() {
        $(this).addClass('clicked');
        $('#showDay').text($(this).text());
    });
});