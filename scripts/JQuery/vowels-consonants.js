$(function () {
    let check = $('.check-btn');
    let field = $('#textField');
    let text = field.val();
    $('.alert-text').hide();

    check.on('click', function () {

        const returnLetters = text => {
            if (text.length == 0) {
                $('.alert-text').hide();
            } 
            if (text.length > 0) {
                $('.alert-text').show();
            } 
        }

        const isVowel = c => {
            let v = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');

            return v;
        }

        returnLetters(text);
    });
});