$(function () {
    let wines = [];
    let list = $('#winesList');

    const createWinesList = wines => {
        if(!wines) {
            throw new Error('The wines parameter must be populated');
        }

        let winesList = $('.wines-container').find('.product');

        for(let i = 0; i < winesList.length; i++) {
            let winesObj = new Object();

            winesObj.name = $('.product').eq(i).attr('data-product-name'),
            winesObj.id = $('.product').eq(i).attr('data-product-id'),
            wines.push(winesObj);
        }
    }

    createWinesList(wines);

    const addWinesToList = wines => {
        if(wines.length == 0) {
            throw new Error('The wines list must be given');
        }

        list.find('option').eq(0).val(0);

        for(let i = 0; i < wines.length; i++) {
            let option = $('<option></option>');

            list.append(option);
            option.attr('value', wines[i].id);
            option.val(wines[i].id);
            option.html(wines[i].name);
        }
    }

    addWinesToList(wines);

    list.change(function () {
        let selected = $(this).find(':selected');
        let selectedOption = selected.val();

        $('.product').hide();

        let matchedValue = '.product[data-product-id=' + selectedOption + ']';

        if(selectedOption == 0) {
            $('.product').show();
        }
        if(selectedOption !== 0) {
            $(matchedValue).show();
        }
    });
});