var cars = [{
        model: 'Mercedes-Benz',
        make: 'E50',
    },
    {
        model: 'Honda',
        make: 'Accord',
    },
    {
        model: 'Ford',
        make: 'F250',
    },
    {
        model: 'Toyota',
        make: 'RAV4',
    },
];

var stocks = [3, 1, 4, 1];

$(function () {
    function addModelsToDrop(cars, dropId) {
        if (cars.length == 0) {
            throw new Error('Cars list list be given');
        }

        $(dropId).empty();

        var blank = $('<option></option>');

        $(dropId).append(blank);

        for (var i = 0; i < cars.length; i++) {
            var option = $('<option></option>');

            option.val(cars[i].model);
            option.html(cars[i].model);

            $(dropId).append(option);
        }
    }

    addModelsToDrop(cars, '#modelDrop');

    $('#modelDrop').change(function () {
        $('#makeDrop').empty();

        var selectedOption = $(this).find(':selected');
        var carCode = selectedOption.val();
        var blank = $('<option></option>');

        $('#makeDrop').append(blank);

        for (var i = 0; i < cars.length; i++) {
            var option = $('<option></option>');

            if (cars[i].model == carCode) {
                option.val(cars[i].make);
                option.html(cars[i].make);

                $('#makeDrop').append(option);
            }
        }
    });

    function includeStocksInCars(stocks) {
        if (stocks.lenght == 0) {
            throw new Error('Stocks list must be given');
        }

        return cars.push(stocks);
    }

    includeStocksInCars(stocks);

    $('#makeDrop').change(function () {

        for (var i = 0; i < cars.length; i++) {
            Object.assign(cars[i], {
                stock: stocks[i]
            });

            $('#stock').html(cars[i].stock);
        }
    });
});