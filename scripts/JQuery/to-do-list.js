$(function () {
    const button = $('button');
    let list = $('.list-container');

    button.on('click', function () {
        let text = $('#textField');
        let listItem = $('<li></li>');
        let listContent = text.val();
        let listText = listItem.text(listContent);

        list.find('ul').append(listText);
        listItem.append('<i class="fa fa-close"></i>');

        if (listContent.length == 0 || listContent === '') {
            listItem.remove();
        }
        if(listContent.length > 0) {
            return text.val(null);
        }

        $('.fa-close').on('click', function() {
            $(this).parent().remove();
        });
    });
});