$(function () {
    var words = $('#maxWords');
    var textBlock = $('#textarea');

    textBlock.on('keyup', function () {
        var count = $(this).val().length;

        if(count > 100) {
            throw new Error('you have more words than the 1000 words limit');
        }

        words.text(count + '/' + textBlock.attr('maxlength'));
    });
});