$(function () {
    let check = $('.check-btn');
    let field = $('#textField');
    let text = field.val();
    $('.alert-text').hide();

    check.on('click', function () {

        const returnLetters = text => {
            if (text.length == 0) {
                $('.alert-text').show();
            } else {
                $('.alert-text').hide();
            }

            let count = 0;

            for (let i = 0; i < text.length; i++) {
                let c = text.charAt(i);
                if (isVowel(c)) {
                    count++;
                }

                $('.vowels-number').text(count);
            }
        }

        const isVowel = c => {
            let v = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');

            return v;
        }

        returnLetters(text);
    });
});