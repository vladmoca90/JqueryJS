var destinations = [
    {
        code: 'AYW',
        name: 'Aberystwyth',
    },
    {
        code: 'BSK',
        name: 'Basingstoke',
    },
    {
        code: 'BTH',
        name: 'Bath Spa',
    },
    {
        code: 'BHM',
        name: 'Birmingham Grand Central',
    },
    {
        code: 'BAW',
        name: 'Blackwater',
    },
    {
        code: 'BCE',
        name: 'Bracknell',
    },
    {
        code: 'BRI',
        name: 'Bristol Temple Meads',
    },
    {
        code: 'CDF',
        name: 'Cardiff Central',

    },
    {
        code: 'DID',
        name: 'Didcot Parkway',

    },
    {
        code: 'EAL',
        name: 'Ealing Broadway',

    },
    {
        code: 'FNN',
        name: 'Farnborough North',
    },
    {
        code: 'GTW',
        name: 'Gatwick Airport',
    },
    {
        code: 'GLD',
        name: 'Guildford',
    },
    {
        code: 'PAD',
        name: 'London Paddington',
    },
    {
        code: 'WAT',
        name: 'London Waterloo',
    },
    {
        code: 'MAI',
        name: 'Maidenhead',
    },
    {
        code: 'MIA',
        name: 'Manchester Picadilly',
    },
    {
        code: 'NBY',
        name: 'Newbury',
    },
    {
        code: 'NCL',
        name: 'Newcastle',
    },
    {
        code: 'OXF',
        name: 'Oxford',
    },
    {
        code: 'PLY',
        name: 'Plymouth',
    },
    {
        code: 'RDG',
        name: 'Reading',
    },
    {
        code: 'SOU',
        name: 'Southampton Central',
    },
    {
        code: 'TWI',
        name: 'Twickenham',
    },
    {
        code: 'WIN',
        name: 'Winchester',
    },
    {
        code: 'WNC',
        name: 'Windsor',
    },
    {
        code: 'WKM',
        name: 'Wokingham',
    },
    {
        code: 'YRK',
        name: 'York',
    },
];

$(function () {

    function getTrainStations(destinations, dropdownId) {
        if (destinations.length == 0) {
            throw new Error('Destinations must be provided');
        }

        var stationsDropdown = $(dropdownId);

        stationsDropdown.empty();

        var station = $('<option value="Choose station">Choose station:</option>');
        $('#fromStation').append(station);
        var destination = $('<option value="Choose destination">Choose destination:</option>');
        $('#toStation').append(destination);

        for (var i = 0; i < destinations.length; i++) {
            var stationOption = $('<option></option>');

            stationOption.attr('value', destinations[i].code);
            stationOption.html(destinations[i].name);
            stationsDropdown.append(stationOption);
        }
    }

    getTrainStations(destinations, '#fromStation');

    $('#fromStation').change(function() {
        var selectedOption = $(this).find(':selected');
        var removeSelected = selectedOption.val();
        var destinations2 = [];

        for (var i = 0; i < destinations.length; i++) {
           if(removeSelected != destinations[i].code) {
               destinations2.push(destinations[i]);
           }
        }

        getTrainStations(destinations2, '#toStation');
    });
});