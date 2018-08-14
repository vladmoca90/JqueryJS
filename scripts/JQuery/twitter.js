$(function () {
    var maxCount = 140;
    // var maxCharacters = $('<span id="maxCharacters"></span>');

    function changeColor(id) {
        $(id).removeClass('low');
        $(id).removeClass('medium');
        $(id).removeClass('high');
        $(id).removeClass('negative');
    }

    $('#commentSection').keypress(function () {
        var value = $(this).val().length;

        if (value > 0 && value <= 40) {
            changeColor('#counter');
            $('#counter').addClass('high');
            $('#counter').html(maxCount - value);
        }
        if (value >= 41 && value <= 100) {
            changeColor('#counter');
            $('#counter').addClass('medium');
            $('#counter').html(maxCount - value);
        }
        if (value >= 101 && value <= 140) {
            changeColor('#counter');
            $('#counter').addClass('low');
            $('#counter').html(maxCount - value);
        }
        if (value > 140) {
            changeColor('#counter');
            $('#counter').addClass('negative');
            $('#counter').html(maxCount - value);
        }
    });

    $('button').click(function () {
        var content = $('#commentSection').val();
        var tweet = $('<li class="text"></li>');

        if (content.length == 0 || content.length > 140) {
            return;
        }

        tweet.html(content);
        $('#commentDisplay').prepend(tweet);
    });
});