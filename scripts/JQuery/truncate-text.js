$(function() {

    function truncateText(text, n) {

        var text = $('#textContent').val();
        var n = $('#numberValue').val();

        if(text.length == 0) {
            throw new Error('The input for text cannot be empty');
        }
        if(n == 0) {
            return text;
        }
        if(n < 0) {
            throw new Error('n must be greater or equal to 0');
        }
    }

    truncateText(text, n);
});