$(function () {
    var maxCount = 140;
    var maxCharacters = $('<span id="maxCharacters"></span>');

    $('#commentSection').change(function() {

    });

    $('button').click(function () {
        var content = $('#commentSection').val();
        var tweet = $('<li class="text"></li>');

        if (content.length == 0 || content.length > 140 ) {
            return;
        }

        tweet.html(content);
        $('#commentDisplay').prepend(tweet);
    });
});