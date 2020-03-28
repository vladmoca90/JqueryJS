$(function(){
    const button = $('button');
    let list= $('.list-container');

    button.on('click', function() {
        let text = $('#textField');
        let listItem= $('<li></li>');
        let listContent = text.val();
        let listText = listItem.text(listContent);
    
        list.find('ul').append(listText);
        
        if(listContent == '') {
            listItem.remove();
        }
    });
});