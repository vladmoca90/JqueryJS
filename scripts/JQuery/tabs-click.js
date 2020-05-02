$(document).ready(function () {
    let box = $('.pbox')
    box.hide();

    $('a').on('click', function () {
        console.log('CHANGED');

        let content = $(this).attr('data-id');
        box.hide();
        $('#' + content).show();
    });
});