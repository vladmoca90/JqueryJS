const vehicles = [
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

  let searchVehMake = $('.search-car-by-make');
  let searchVehModel = $('.search-car-by-model');

  $('.number-of-cars').text(vehicles.length);

  const addCarMakes = vehicles => {
    if (vehicles.length == 0) {
      throw new Error('The vehicles list must be given.');
    }

    searchVehMake.empty();

    for (let i = 0; i < vehicles.length; i++) {
      let option = $('<option></option>');

      option.html(vehicles[i].make);
      searchVehMake.append(option);
    }
  }

  addCarMakes(vehicles);

  searchVehMake.change(function () {
    let selectedOption = $(this).find(':selected').attr('value');
    let vehCode = selectedOption.val();

    
  });
});