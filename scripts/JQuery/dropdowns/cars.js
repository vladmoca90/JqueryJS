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
            throw new Error('The cars list ust be given');
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
        var selectedOption = $(this).find(':selected');
        var carCode = ;

        for (var i = 0; i < cars.length; i++) {

        }
    });
});