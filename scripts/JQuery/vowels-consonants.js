$(function () {
    let text = $('#textField');

    const returnLetters = text => {
        if (text.length == 0) {
            throw new Error('The field cannot be empty');
        }

        let count = 0;

        for (let i = 0; i < text.length; i++) {
            if (isVowel(c)) {
                count++;
            } else {

            }
        }
    }

    const isVowel = c => {
        let v = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');

        return v;
    }

    returnLetters(text);
});