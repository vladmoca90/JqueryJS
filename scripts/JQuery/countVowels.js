$(function () {

    $('button').click(function () {
        var text = $('#text').val();

        function countVowels(text) {
            if (text.length == 0) {
                throw new Error('The text cannot be empty');
            }

            var count = 0;

            for (i = 0; i < text.length; i++) {
                var c = text.charAt(i);
                if (isVowel(c)) {
                    count++;
                }
            }

            $('p').text(count);
        }

        function isVowel(c) {
            var v = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');

            return v;
        }

        countVowels(text)
    });
});