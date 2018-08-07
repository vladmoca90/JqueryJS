$(function () {

    $('button').click(function () {

        var commentWritten = $('#commentSection').val();
        var commentShown = $('<li class="text"></li>');

        commentShown.val(commentWritten);
        commentShown.html(commentWritten);
        $('#commentDisplay').append(commentShown);
    });
});