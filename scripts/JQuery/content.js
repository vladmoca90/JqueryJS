$(document).ready(function () {
    $('.pbox').hide();

    $('a').click(function () {
        console.log('CHANGED');
        // fade in new selected subcontent
        var content = $(this).attr('data-id');
            $('.pbox').hide();

        $('#' + content).show();
    });
});