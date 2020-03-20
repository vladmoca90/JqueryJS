$(function () {
    var words = $('#maxWords');
    var field = $('#textarea');

    field.on('keyup', function () {
        var count = $(this).val().length;

        if(count > 100) {
            throw new Error('you have more words than the 1000 words limit');
        }

        words.text(count + ' / ' + field.attr('maxlength'));
    });
});