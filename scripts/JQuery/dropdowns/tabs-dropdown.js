$(function () {

    var cars = $('#carsTab');
    var vans = $('#vansTab');

    vans.hide();
    cars.show();

    // $('.form-tabs input').on('change', function () {
    //     var inputField = $(this);
    //     var id = inputField.attr('id');
    //     // hide all tabs
    //     $('.tab').hide();
    //     // show selected tab
    //     $('#' + id + 'Tab').show();
    // });

    $('.form-tabs label').on('click', function () {

        if ($('#cars').is(':checked')) {
            vans.hide();
            cars.show();
        }
        if ($('#vans').is(':checked')) {
            vans.show();
            cars.hide();
        }
    });
});