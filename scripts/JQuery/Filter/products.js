$(function () {

    var products = [];

    function createProductsList(products) {
        if (!products) {
            throw new Error('The products parameter must be populated');
        }

        var productsList = $('.products-container').find('.product');

        for (var i = 0; i < productsList.length; i++) {
            var productsObject = new Object();

            productsObject.name = $('.product').eq(i).attr('data-product-name'),
            productsObject.id = $('.product').eq(i).attr('data-product-id'),

            products.push(productsObject);
        }
    }

    createProductsList(products);

    function addProductsToList(products) {
        if (products.length == 0) {
            throw new Error('The products list must be given');
        }

         for (var i = 0; i < products.length; i++) {
            var option = $('<option></option>');

            $('#productsList').append(option);
            option.html(products[i].name);
        }
    }

    addProductsToList(products);
});