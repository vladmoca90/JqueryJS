$(function () {
    let addBtn = $('.add-button');
    let list = $('.list-main');
    let text = $('#field');

    addBtn.on('click', function() {
        let listItem = $('<li></li>');
        let listContent = text.val();
        let listText = listItem.text(listContent);

        list.append(listText);

        if(listContent.trim().length == 0) {
            listItem.remove();
        }
        if(listContent.length > 0) {
            return text.val(null);
        }
    });
});