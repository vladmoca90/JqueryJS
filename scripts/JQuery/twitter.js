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
        let value = $(this).val().trim().replace(' ', '');

        if (value.length >= 0 && value.length <= 40) {
            clearClasses('#counter');
            $('#counter').addClass('high');
            $('#counter').html(maxCount - value.length);
        }
        if (value.length >= 41 && value.length <= 100) {
            clearClasses('#counter');
            $('#counter').addClass('medium');
            $('#counter').html(maxCount - value.length);
        }
        if (value.length >= 101 && value.length <= 150) {
            clearClasses('#counter');
            $('#counter').addClass('low');
            $('#counter').html(maxCount - value.length);
        }
        if (value.length > 150) {
            clearClasses('#counter');
            $('#counter').addClass('negative');
            $('#counter').html(maxCount - value.length);

            btn.prop('disabled', true);
        } else {
            btn.prop('disabled', false);
        }
    });

    btn.on('click', function () {
        let content = comment.val();
        let tweet = $('<li class="text"></li>');

        tweet.html(content);
        comment.val(' ')
        $('#counter').html(maxCount);
        display.append(tweet);

        if (content.trim().length == 0) {
            tweet.remove();
        }
        if (content.trim().length > 150) {
            return;
        }
    });
});