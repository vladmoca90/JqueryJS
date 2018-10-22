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

        // $('#productsList option:nth-of-type(1)').val(0);

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

        $('.product').remove();

        var product = createProduct(selected.html(), selectedOption);
        // append product

        $('.products-container').append(product);
    });

    function createProduct(productName, productId) {
        var element = $('<div class="product">  \
            <div class="product-description__left"> \
                <h1>Product title</h1>\
            </div>\
            <div class="product-description__right">\
                <img src="#"/>\
            </div>\
        </div>');

        // use the parameters

        // wtf are you doing? ai deja the right  parameters

        // ce rahat faci aici? seteaza atributele

        element.attr('data-product-name', productName);
        element.attr('data-product-id', productId);

        return element;
    }
});