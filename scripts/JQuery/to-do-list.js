$(function () {
    let addBtn = $('.add-button');
    let list = $('.list-main');
    let text = $('#field');

    addBtn.on('click', function() {
        let clone = list.find('li.list-item:first').clone();

        let listContent = text.val();
        let listText = clone.text(listContent);

        list.append(listText);

        if(listContent.trim().length == 0) {
            clone.remove();
        }
        if(listContent.length > 0) {
            return text.val(null);
        }
    });
});