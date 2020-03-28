$(function(){
    const button = $('button');
    let list= $('.list-container');

    button.on('click', function() {
        let text = $('#textField');
        let listItem= $('<li></li>');
        let content = text.val();
        let listText = listItem.text(content);
    
        list.find('ul').append(listText);
        
        if(content == '') {
            listItem.remove();
        }
    });
});