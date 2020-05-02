var prices = {
    products: [
        {
            name: 'tomatoes',
            price: 1.50,
            id: 1,
        },
        {
            name: 'Cat food',
            price: 7.49,
            id: 2,
        },
        {
            name: 'Coffee',
            price: 4.20,
            id: 3,
        }
    ],
}

var basket = [];

function addToBasket(product) {
    // here you update the basket. you add one idem of the above product to the basket
    if (!product) {
        throw new Error('The product must be given');
    }

    basket.push(product);

    updateUi(basket);
}

function removeFromBasket(product) {
    // here you update the basket. you remove one idem of the above product from the basket
    if (!product) {
        throw new Error('The product must be given');
    }

    if (basket.length == 0) {
        return;
    }

    for (var i = 0; i < basket.length; i++) {
        if(basket[i].id == product.id) { // nu exista productId
            basket.splice(i, 1);
        }
    }

    updateUi(basket);
}

function updateUi(basket) {
    // for loop over basket. add all prices. add the end, show the sum on the screen

    if(basket == null) {
        throw new Error('The basket must exist');
    }

    var total = 0;

    for(var i = 0; i < basket.length; i++) {
        total += basket[i].price;
    }

    $('#totalPrice').html(total);
    $('#totalItems').html(basket.length);
}

function getProduct(productId) {
    for (var i = 0; i < prices.products.length; i++) {
        if (prices.products[i].id == productId) {
            return prices.products[i];
        }
    }

    return null;
}

$(function () {
    $('.product__btn--add').on('click', function () {
        console.log("Add clicked.");

        var productId = $(this).attr('product-id');
        var product = getProduct(productId);

        if (product == null) {
            throw new Error('The product could not be found');
        }

        addToBasket(product);
    });

    $('.product__btn--remove').on('click', function () {
        console.log("Remove clicked");
        // try this

        var productId = $(this).attr('product-id');
        var product = getProduct(productId);
        // now check if product is null and throw error if it is. do the same for add
        if (product == null) {
            throw new Error('The product could not be found');
        }

        removeFromBasket(product);
    });
});