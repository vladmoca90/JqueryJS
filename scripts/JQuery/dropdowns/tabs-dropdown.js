$(function () {

    var cars = $('#carsTab');
    var vans = $('#vansTab');

    vans.hide();
    cars.show();

    $('input').change(function () {
        var inputField = $(this);
        var id = inputField.attr('id');
        // hide all tabs
        $('.tab').hide();
        // show selected tab
        $('#' + id + 'Tab').show();
    })

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