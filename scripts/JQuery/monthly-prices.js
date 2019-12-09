$(function () {
    let vehicles = $('.vehicle-price');

    for (let i = 0; i < vehicles.length; i++) {
        let vehicle = $(vehicles[i]);

        let vehPrice = vehicle.children('.car-price').html().trim().substring(1); //gives '5,999' for example
    }

    return parseInt(vehPrice);
});