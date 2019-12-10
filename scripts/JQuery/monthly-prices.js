$(function () {
    var vehicles = $('.vehicle-price');

    function getVehiclePrices(vehicles) {

        if (vehicles.length == 0) {
            throw new Error('The vehicles list must be given');
        }

        for (var i = 0; i < vehicles.length; i++) {
            var vehicle = $(vehicles[i]);

            var vehPrice = parseInt(vehicle.children('.car-price').html().replace(',', '').trim().substring(1));

            var calcMonthlyPrice = (vehPrice) / 12;

            $('.monthly-price').text('£' + calcMonthlyPrice.toFixed(2));
        }
    }

    getVehiclePrices(vehicles);
});