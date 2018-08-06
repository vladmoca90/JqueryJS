$(function () {
    $('button').click(function () {

        var n = $('#number').val();
        var m = $('#digit').val();

        function findDigit(n, m) {
            if (n.toString().length == 0) {
                throw new Error('The number must be given');
            }
            if (n.toString().length == 1) {
                throw new Error('The number must have at leat two digits');
            }
            if (m < 0) {
                throw new Error('m must be greater than 0');
            }
            if (m >= n.toString().length) {
                throw new Error('The digit does not exist');
            }

            var digit = n.toString()[m];

            return $('p').text(parseInt(digit));
        }
    });

    findDigit(n, digit);
});