const cars = [
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

const vans = [
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

  const changeTab = () => {
    $('.form-tabs input').change(function () {
      console.log('CHANGED');
      let tabId = $(this).attr('id');
      $('.tab').hide();

      $('#' + tabId + 'Tab').show();
    });
  }

  changeTab();

  let searchModel = $('.search-by-model');
  let searchMake = $('.search-by-make');

  const addCarMakes = cars => {
    if (cars.length == 0) {
      throw new Error('The cars list must be given.');
    }

    for(let i = 0; i < cars.length; i++) {

    }
  }

  addCarMakes(cars);
  const addVanMakes = vans => {
    if (vans.length == 0) {
      throw new Error('The vans list must be given.');
    }

    for(let i = 0; i < vans.length; i++) {

    }
  }

  addVanMakes(vans);

  searchMake.change(function () {
    let value = $(this).find(':selected').attr('value');

    if (value == 'any') {
      searchModel.find('option[data-parent=any]').prop('selected', true); // select "any" from second dropdown
      searchModel.find('option').show();
      searchModel.attr('disabled', true);

      return;
    }

    searchModel.find('option').hide();
    searchModel.attr('disabled', false);

    searchModel.find('option[data-parent=any]').prop('selected', true);
    searchModel.find('[data-parent=any]').show();
    searchModel.find('option[data-parent=' + value + ']').show();
  });
});