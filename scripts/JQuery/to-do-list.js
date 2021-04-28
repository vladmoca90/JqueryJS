$(function () {
    let addBtn = $('.add-button');
    let list = $('.list-container');
    let text = $('#field');
    // let close = $('<i class="fa fa-close"></i>');

    addBtn.on('click', function() {
        let listItem = $('<li></li>');
        let listContent = text.val();
        let listText = listItem.text(listContent);

        list.find('ul').append(listText);
        // listItem.append(close);

        if(listContent.trim().length == 0) {
            listItem.remove();
        }
        if(listContent.length > 0) {
            return text.val(null);
        }
    });
    // close.on('click', function() {
    //     $(this).parent().remove();
    // });
});