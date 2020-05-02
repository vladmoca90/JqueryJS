$(function () {
    let check = $('.check-btn');
    let field = $('#textField');
    let text = field.val();
    $('.alert-text').hide();

    check.on('click', function () {
        const countVowels = text => {
            if (text.length == 0) {
                $('.alert-text').show();
            }
            if (text.length > 0) {
                $('.alert-text').hide();
            }
        }

        const isVowel = c => {
            let v = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');

            return v;
        }

        countVowels(text);
    });
});