const cars = [{
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

const vans = [{
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

  const changeTab = () => {
    $('.form-tabs input').change(function () {
      console.log('CHANGED');
      let tabId = $(this).attr('id');
      $('.tab').hide();

      $('#' + tabId + 'Tab').show();
    });
  }

  changeTab();

  let searchCarModel = $('.search-car-by-model');
  let searchCarMake = $('.search-car-by-make');

  const addCarMakes = cars => {
    if (cars.length == 0) {
      throw new Error('The cars list must be given.');
    }

    for (let i = 0; i < cars.length; i++) {
      let option = $('<option></option>');

      option.html(cars[i].make);
      searchCarMake.append(option);
    }
  }

  addCarMakes(cars);

  searchMake.change(function () {
    let value = $(this).find(':selected').attr('value');

    if (value == 'any') {
      searchCarModel.find('option[data-parent=any]').prop('selected', true); // select "any" from second dropdown
      searchCarModel.find('option').show();
      searchCarModel.attr('disabled', true);

      return;
    }

    searchCarModel.find('option').hide();
    searchCarModel.attr('disabled', false);

    searchCarModel.find('option[data-parent=any]').prop('selected', true);
    searchCarModel.find('[data-parent=any]').show();
    searchCarModel.find('option[data-parent=' + value + ']').show();
  });
});