$(function () {
    $('button').on('click', function () {
        let text = $('#textContent').val();
        let n = $('#numberValue').val();

        function truncateText(text, n) {
            if (text.length == 0) {
                throw new Error('The text cannot be empty');
            }
            if (n <= 0) {
                throw new Error('n must be greater or equal to 1');
            }

            let splitText = text.trim().split('');
            let truncatedText = splitText.splice(0, n).join('');

            $('p').text(truncatedText);
        }

        truncateText(text, n);
    });
});