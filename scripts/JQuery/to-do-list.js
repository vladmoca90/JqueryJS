$(function () {
    let btn = $('button');
    let list = $('.list-container');
    let text = $('#textField');

    btn.on('click', function () {
        let listItem = $('<li></li>');
        let listContent = text.val();
        let listText = listItem.text(listContent);
        let close = $('<i class="fa fa-close"></i>');

        list.find('ul').append(listText);
        listItem.append(close);

        if(listContent.trim().length == 0) {
            listItem.remove();
        }
        if(listContent.length > 0) {
            return text.val(null);
        }

        close.on('click', function () {
            $(this).parent().remove();
        });
    });
});