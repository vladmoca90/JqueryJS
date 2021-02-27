/* TODO: 
        1. Add +, -, /, * 
        2. Add click events for these operators that are almost identical to the digit click event: you simply click the button and this will add a span to the #display

        sample result:

        <span class="number">2</span><span class="operator">+</span><span>5</span><span>*</span><span>2</span>
    */
$(function () {
    let digit = $('.digit');
    let zero = $('#zero');

    digit.on('click', function () {
        // call function that:
        // creates span with the given value
        // adds span to #display

        let number = $('<span class="number"></span>');

        zero.css('display', 'none');
        number.html($(this).html());
        $('#display').append(number);
    });

    $('.operators button').on('click', function () {
        let operator = $('<span class="operator"></span>');

        operator.html($(this).html());
        $('#display').append(operator);
    });

    // $('.result > #equal').on('click', function() {
    //     let result = $('.number').html();
    //     let finalResult = $('<span class="result"></span>');

    //     $('#display .number').css('display', 'none');
    //     $('#display .operator').css('display', 'none');
    //     finalResult.html(result);
    //     $('#display').append(finalResult);
    // });
});