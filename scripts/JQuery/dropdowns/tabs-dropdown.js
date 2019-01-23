$(function () {

    $('#carsTab .search-by-make').change(function () {
        var value = $(this).find(':selected').attr('value');
        $('.search-by-model option').hide();
        $('#carsTab .search-by-model').attr('disabled', false);

        if (value == 'any') {
            $('#carsTab .search-by-model').attr('disabled', true);
        }

        $('#carsTab .search-by-model option[data-parent=' + value + ']').show();
    });
});