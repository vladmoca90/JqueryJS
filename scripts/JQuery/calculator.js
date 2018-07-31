/* TODO: 
        1. Add +, -, /, * 
        2. Add click events for these operators that are almost identical to the digit click event: you simply click the button and this will add a span to the #display

        sample result:

        <span class="number">2</span><span class="operator">+</span><span>5</span><span>*</span><span>2</span>
    */
$(function () {
    $('.digit').click(function () {
        // call function that:
        // creates span with the given value
        // adds span to #display

        var number = $('<span class="number"></span>');

        $('#zero').css('display', 'none');
        number.html($(this).html());
        $('#display').append(number);
    });

    $('.operators button').click(function () {
        var operator = $('<span class="operator"></span>');

        operator.html($(this).html());
        $('#display').append(operator);
    });

    // $('.result > #equal').click(function() {
    //     var result = $('.number').html();
    //     var finalResult = $('<span class="result"></span>');

    //     $('#display .number').css('display', 'none');
    //     $('#display .operator').css('display', 'none');
    //     finalResult.html(result);
    //     $('#display').append(finalResult);
    // });
});