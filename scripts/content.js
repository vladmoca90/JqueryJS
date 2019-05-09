$(document).ready(function () {
    $('a').on('click', function () {
        $('.pbox').hide();
        // fade in new selected subcontent
        $('.pbox[id=' + $(this).attr('data-id') + ']').show(600);
    });
});