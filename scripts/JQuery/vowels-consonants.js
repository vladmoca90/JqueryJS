$(function () {
    let check = $('.check-btn');
    let field = $('#textField');
    let text = field.val();
    $('.alert-text').hide();

    check.on('click', function () {
        if (text.length == 0) {
            $('.alert-text').show();
        }
        if (text.length > 0) {
            $('.alert-text').hide();
        }
    });
});