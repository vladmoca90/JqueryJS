$(function () {

    var products = [];

    function createProductsList(products) {
        if (!products) {
            throw new Error('The products parameter must be populated');
        }

        var productsList = $('.products-container').find('.product');

        for (var i = 0; i < productsList.length; i++) {
            var productsObj = new Object();

            productsObj.name = $('.product').eq(i).attr('data-product-name'),
            productsObj.id = $('.product').eq(i).attr('data-product-id'),

            products.push(productsObj);
        }
    }

    createProductsList(products);

    function addProductsToList(products) {
        if (products.length == 0) {
            throw new Error('The products list must be given');
        }

        $('#productsList option:nth-of-type(1)').val(0);

        for (var i = 0; i < products.length; i++) {
            var option = $('<option></option>');

            $('#productsList').append(option);
            option.attr('value', products[i].id);
            option.val(products[i].id);
            option.html(products[i].name);
        }
    }

    addProductsToList(products);

    $('#productsList').change(function () {
        var selected = $(this).find(':selected');
        var selectedOption = selected.val();

        $('.product').hide();

        var matchedValue = `.product[data-product-id=Wrote with bak-tickes${selectedOption}]`;

        if(selectedOption == 0) {
            $('.product').show();
        }
        if(selectedOption !== 0) {
            $(matchedValue).show();
        }

    });
});