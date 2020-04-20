$(function () {
    let maxCount = 150;
    let btn = $('button');
    let comment = $('#commentSection');
    let display = $('#commentDisplay');

    $('#counter').text(maxCount);

    const clearClasses = id => {
        $(id).removeClass('low');
        $(id).removeClass('medium');
        $(id).removeClass('high');
        $(id).removeClass('negative');
    }

    comment.on('input', function () {
        let value = $(this).val().length;

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
        if (value >= 101 && value <= 150) {
            clearClasses('#counter');
            $('#counter').addClass('low');
            $('#counter').html(maxCount - value);
        }
        if (value > 150) {
            clearClasses('#counter');
            $('#counter').addClass('negative');
            $('#counter').html(maxCount - value);
        }
    });

    btn.on('click', function () {
        let content = comment.val();
        let tweet = $('<li class="text"></li>');

        tweet.html(content);
        comment.val(' ')
        $('#counter').html(maxCount);
        display.append(tweet);

        if (content.length == 0) {
            tweet.remove();
        }
        if (content.length > 150) {
            return;
        }
    });
});