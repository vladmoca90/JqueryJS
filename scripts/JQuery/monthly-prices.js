$(function () {
    let vehicles = $('.vehicle-price');

    function getVehiclesPrices(vehicles) {
        if (vehicles.length == 0) {
            return;
        }

        for (let i = 0; i < vehicles.length; i++) {
            let vehicle = $(vehicles[i]);

            let vehPrice = vehicle.children('.car-price').html().replace(',', '').trim().substring(1);

            let calcMonthlyPrice = parseInt(vehPrice);

            vehicle.children('.monthly-price').text('£' + ((calcMonthlyPrice)/12).toFixed(2) + '/month');
        }
    }

    getVehiclesPrices(vehicles);
});