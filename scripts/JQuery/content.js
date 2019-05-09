$(document).ready(function () {
    $('a[data-name]').on('click', function () {
        $('.pbox').hide();
        // fade in new selected subcontent
        $('.pbox[name=' + $(this).attr('data-name') + ']').show();
    });
});