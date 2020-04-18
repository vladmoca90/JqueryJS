$(function () {
    let text = $('#textField');
    let total = text.val();
    let check = $('.check-btn');

    check.on('click', function () {
        const returnLetters = total => {
            if (total.length == 0) {
                throw new Error('The field cannot be empty');
            }

            let count = 0;

            for (let i = 0; i < total.length; i++) {
                if (isVowel(c)) {
                    count++;
                    $('.vowels-number').text(count);
                }
            }
        }

        const isVowel = c => {
            let v = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');

            return v;
        }

        returnLetters(total);
    });
});