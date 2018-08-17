$(function () {
    var maxCount = 140;
    // var maxCharacters = $('<span id="maxCharacters"></span>');

    function clearClasses(id) {
        $(id).removeClass('low');
        $(id).removeClass('medium');
        $(id).removeClass('high');
        $(id).removeClass('negative');
    }

    $('#commentSection').on('input', function () {
        var value = $(this).val().length;

        if (value >= 0 && value <= 40) {
            clearClasses('#counter');
            $('#counter').addClass('high');
            $('#counter').html(maxCount - value);
        }
        if (value >= 41 && value <= 100) {
            clearClasses('#counter');
            $('#counter').addClass('medium');
            $('#counter').html(maxCount - value);
        }
        if (value >= 101 && value <= 140) {
            clearClasses('#counter');
            $('#counter').addClass('low');
            $('#counter').html(maxCount - value);
        }
        if (value > 140) {
            clearClasses('#counter');
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
        $('#commentSection').val(' ')
        $('#counter').html(maxCount);
        $('#commentDisplay').prepend(tweet);
    });
});