$(function(){
    let text = $('#textField');
    let content = $('#textField').val();
    let button = $('button');

    button.on('click', function() {
        var listItem= $('<li></li>');

        listItem.text(content);
        $('.list-container').find('ul').append(listItem.text(content));
    });
});