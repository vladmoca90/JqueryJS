$(function () {
    var maxCount = 140;
    var maxCharacters = $('<span id="maxCharacters"></span>');


    // $('#characters').append(maxCharacters.html(160));

    // if (commentWritten.length > 0) {
    //     $('#characters').append(maxCharacters.html(160) - commentWritten.length);
    // }

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