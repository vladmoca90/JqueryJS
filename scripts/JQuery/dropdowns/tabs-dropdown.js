$(function () {

    var allCars = [];
    var carMakes = [];
    var allCars = { "makes": [] };

    function getCarMakes(carMakes) {
        if (!carMakes) {
            throw new Error('Car makes must be provided');
        }

        var getMakes = $('#carsTab').find('.search-by-make option');

        for (var i = 0; i < getMakes.length; i++) {
            carMakes.push($('.search-by-make').find('option').eq(i).attr('value'));
        }

        return carMakes;
    }

    getCarMakes(carMakes);
});