$(function(){
    const button = $('button');

    button.on('click', function() {
        let text = $('#textField');
        let listItem= $('<li></li>');
        let content = text.val();
        let listText = listItem.text(content);
    
        $('.list-container').find('ul').append(listText);
        text.val(null);
    });
});