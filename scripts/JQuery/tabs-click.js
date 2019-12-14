$(document).ready(function () {
    $('.pbox').hide();

    $('a').click(function () {
        console.log('CHANGED');

        var content = $(this).attr('data-id');
        $('.pbox').hide();
        $('#' + content).show();
    });
});