$(function () {

    $('#vansTab').hide();

    $('.form-tabs input').change(function () {
        var tabId = $(this).attr(id);
        $('.tab').hide();

        $(tabId + 'Tab').show();
    });

    $('.search-by-make').change(function () {
        var value = $(this).find(':selected').attr('value');

        if (value == 'any') {
            $('.search-by-model [data-parent=any]').prop('selected', true); // select "any" from second dropdown
            $('.search-by-model option').show();
            $('.search-by-model').attr('disabled', true);

            return;
        }

        $('.search-by-model option').hide();
        $('.search-by-model').attr('disabled', false);

        $('.search-by-model [data-parent=any]').prop('selected', true);
        $('.search-by-model [data-parent=any]').show();
        $('.search-by-model option[data-parent=' + value + ']').show();
    });
});