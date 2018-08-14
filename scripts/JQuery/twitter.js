$(function () {
    var maxCount = 140;
    var maxCharacters = $('<span id="maxCharacters"></span>');

    $('#commentSection').keyup(function () {
        if ($(this).val().length > 0 && $(this).val().length <= 40) {
            $('#counter').removeClass('negative');
            $('#counter').addClass('high');
            $('#counter').html(maxCount - $(this).val().length);
        }
        if ($(this).val().length >= 41 && $(this).val().length <= 100) {
            $('#counter').removeClass('high');
            $('#counter').addClass('medium');
            $('#counter').html(maxCount - $(this).val().length);
        }
        if ($(this).val().length >= 101 && $(this).val().length <= 140) {
            $('#counter').removeClass('medium');
            $('#counter').addClass('low');
            $('#counter').html(maxCount - $(this).val().length);
        }
        if ($(this).val().length > 140) {
            $('#counter').removeClass('low');
            $('#counter').addClass('negative');
            $('#counter').html(maxCount - $(this).val().length);
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