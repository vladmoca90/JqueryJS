$(function () {

    var cars = $('#carsMakesModels');
    var vans = $('#vansMakesModels');

    vans.hide();
    cars.show();

    $('.form-tabs label').click(function () {
        if ($('#carsTab').is(':checked')) {
            vans.hide();
            cars.show();
        }
        if ($('#vansTab').is(':checked')) {
            cars.hide();
            vans.show();
        }
    });
});