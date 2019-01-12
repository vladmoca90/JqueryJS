$(function() {

    if(Cookies.get('adDismissed')) {
        $('.pop-up').css('display', 'none');
    }

    $('.close-btn').on('click', function() {
        $('.pop-up').css('display', 'none');

        Cookies.set('adDismissed', true, { domain: 'file:///C:/Users/vladm/Documents/Visual%20Studio%202015/Projects/Jquery/sites/pop-up.html' });
    });
});