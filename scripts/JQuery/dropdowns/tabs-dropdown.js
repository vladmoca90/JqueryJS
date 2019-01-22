$(function () {

    $('#vansMakesModels').hide();
    $('#carsMakesModels').show();

    $('.form-tabs label').click(function () {
        if ($('#carsTab').is(':checked')) {
            $('#vansMakesModels').hide();
            $('#carsMakesModels').show();
        }
        if ($('#vansTab').is(':checked')) {
            $('#carsMakesModels').hide();
            $('#vansMakesModels').show();
        }

    });

});