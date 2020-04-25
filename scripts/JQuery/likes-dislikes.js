$(function () {
    $('.btn').on('click', function () {
        let parent = $(this).parent();
        let count = parseInt(parent.attr('data-count'));
        let liked = parent.attr('data-liked') == 'true';

        if (liked) { // if we've already liked this, then it means we will unlike it now
            $(this).html('Like');
            liked = false;
            count = count - 1;
            parent.attr('data-liked', liked);
            parent.attr('data-count', count);

            let text = '';

            if (count == 0) {
                text = 'Be the first to like this!';
            } else {
                text = count == 1 ? '1 other person likes this' : count + ' others like this';
            }

            parent.find('span').html(text);
        } else { // the other way round
            $(this).html('Unlike');
            liked = true;
            count = count + 1;
            parent.attr('data-liked', liked);
            parent.attr('data-count', count);

            let text = '';

            if (count == 1) {
                text = 'You like this';
            } else {
                text = count == 2 ? 'You and one other person likes this' : 'You and ' + (count - 1) + ' others like this';
            }

            parent.find('span').html(text);
        }
    })
});