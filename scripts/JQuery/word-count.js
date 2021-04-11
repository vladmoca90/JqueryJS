$(function () {
    let words = $('#maxWords');
    let field = $('#message');

    field.on('keyup', function () {
        let count = $(this).val().trim().replace(' ', '');

        if(count > 100) {
            throw new Error('you have more words than the 1000 words limit');
        }

        words.text(count.length + ' / ' + field.attr('maxlength'));
    });
});