$(function () {

    $('button').click(function () {

        var text = $('#textContent').val();
        var n = $('#numberValue').val();

        function truncateText(text, n) {

            if (text.length == 0) {
                throw new Error('The text cannot be empty');
            }
            if (n <= 0) {
                throw new Error('n must be greater or equal to 1');
            }

            var splitText = text.trim().split('');

            var truncatedText = splitText.splice(0, n).join('');

            $('p').text(truncatedText);
        }

        truncateText(text, n);
    });
});