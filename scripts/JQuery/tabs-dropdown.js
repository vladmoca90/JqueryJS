var cars = [
    {
      make: 'Abarth',
      model: ['Abarth 1', 'Abarth 2', 'Abarth 3'],
    },
    {
      make: 'Alfa Romeo',
      model: ['Alfa Romeo 1', 'Alfa Romeo 2', 'Alfa Romeo 3'],
    },
    {
      make: 'Toyota',
      model: ['Toyota 1', 'Toyota 2', 'Toyota 3'],
    },
    {
      make: 'Vauxhall',
      model: ['Vauxhall 1', 'Vauxhall 2', 'Vauxhall 3'],
    },
    {
      make: 'Volkswagen',
      model: ['Volkswagen 1', 'Volkswagen 2', 'Volkswagen 3'],
    },
    {
      make: 'Volvo',
      model: ['Volvo 1', 'Volvo 2', 'Volvo 3'],
    },
];

var vans = [
    {
      make: 'Abarth',
      model: ['Abarth 11', 'Abarth 21', 'Abarth 31'],
    },
    {
      make: 'Alfa Romeo',
      model: ['Alfa Romeo 11', 'Alfa Romeo 21', 'Alfa Romeo 31'],
    },
    {
      make: 'Toyota',
      model: ['Toyota 11', 'Toyota 21', 'Toyota 31'],
    },
    {
      make: 'Vauxhall',
      model: ['Vauxhall 11', 'Vauxhall 21', 'Vauxhall 31'],
    },
    {
      make: 'Volkswagen',
      model: ['Volkswagen 11', 'Volkswagen 21', 'Volkswagen 31'],
    },
    {
      make: 'Volvo',
      model: ['Volvo 11', 'Volvo 21', 'Volvo 31'],
    },
];


$(function () {

    $('#vansTab').hide();

    $('.form-tabs input').change(function () {
        console.log('CHANGED');
        var tabId = $(this).attr('id');
        $('.tab').hide();

        $('#' + tabId + 'Tab').show();
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