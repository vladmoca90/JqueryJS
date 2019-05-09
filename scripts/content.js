$(document).ready(function () {
    $('#menu').on('click', 'a', function () {
        // $('.current').not($(this).closest('li').addClass('current')).removeClass('current');
        // fade out all open subcontents
        $('.pbox:visible').hide(600);
        // fade in new selected subcontent
        $('.pbox[id=' + $(this).attr('data-id') + ']').show(600);
    });
});