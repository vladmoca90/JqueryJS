$(function () {
    let vehicles = $('.vehicle-price');

    function getVehiclePrice(vehicles) {

        if (vehicles.length == 0) {
            throw new Error('The vehicles list must be given');
        }

        for (let i = 0; i < vehicles.length; i++) {
            let vehicle = $(vehicles[i]);

            let vehPrice = vehicle.children('.car-price').html().replace(',', '').trim().substring(1);

            return parseInt(vehPrice);
        }
    }

    getVehiclePrice(vehicles);
});