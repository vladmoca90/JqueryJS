$(function(){
    let text = $('#textField');
    let content = text.val();
    let button = $('button');

    button.on('click', function() {
        var listItem= $('<li></li>');

        // var listText = listItem.text(content);
        $('.list-container').find('ul').append(listItem);
        listItem.text(content);
    });
});