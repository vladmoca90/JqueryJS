var data = {
    countries: [{
            name: 'India',
            code: 'IND',
            capital: 'Delhi',
            otherCities: ['Madras', 'Mumbai', 'Calcutta', 'Varanasi', 'Hyderabad'],
        },
        {
            name: 'Romania',
            code: 'ROM',
            capital: 'Bucharest',
            otherCities: ['Cluj-Napoca', 'Iasi', 'Craiova', 'Brasov'],
        },
        {
            name: 'Israel',
            code: 'ISR',
            capital: 'Jerusalem',
            otherCities: ['Tel Aviv', 'Haifa', 'Eilat', 'Netanya'],
        },
        {
            name: 'France',
            code: 'FRA',
            capital: 'Paris',
            otherCities: ['Lyon', 'Marseille', 'Toulouse', 'Bordeaux', 'Strasbourg', 'Nice'],
        },
        {
            name: 'Moldova',
            code: 'MDV',
            capital: 'Kishinev',
            otherCities: ['Balti', 'Tighina'],
        },
        {
            name: 'Brazil',
            code: 'BRA',
            capital: 'Brasilia',
            otherCities: ['Rio de Janeiro', 'Sao Paulo', 'Fortaleza', 'Recife'],
        },
        {
            name: 'South Africa',
            code: 'SAF',
            capital: 'Pretoria',
            otherCities: ['Johannesburg', 'Cape Town', 'Durban'],
        },
        {
            name: 'Argentina',
            code: 'ARG',
            capital: 'Buenos Aires',
            otherCities: ['Cordoba', 'Mendoza', 'Bahia Blanca', 'Mar del Plata'],
        },
        {
            name: 'United States',
            code: 'USA',
            capital: 'Washington DC',
            otherCities: ['New York City', 'Los Angeles', 'Miami', 'Chicago', 'San Francisco', 'Dallas', 'Seattle', 'Boston', 'Denver'],
        },
    ],
}

$(function () {
    function populateCountriesDrop(data) {

        if (data.length == 0) {
            throw new Error('The list must be given');
        }

        // var dropdown = $(dropdownId);

        // $('#countriesDrop').empty();

        // dropdown.empty();

        // var blank = $('<option value=" "></option>');

        // $('#countriesDrop').append(blank);

        for (var i = 0; i < data.countries.length; i++) {
            var option = $('<option></option>');
            option.attr('value', data.countries[i].code);
            option.html(data.countries[i].name);

            $('#countriesDrop').append(option);
        }
    }

    populateCountriesDrop(data, '#countriesDrop');

    $('#countriesDrop').change(function () {
        var selectedOption = $(this).find(':selected');
        var capital = selectedOption.val();

        for (var i = 0; i < data.countries.length; i++) {
            if (data.countries[i].code == capital) {
                $('#capital').html(data.countries[i].capital);
            }
        }
    });

    $('#countriesDrop').change(function () {
        $('#citiesDrop').empty();

        var selectedOption = $(this).find(':selected');
        var country = selectedOption.val();
        var blank = $('<option value=" "></option>');

        $('#citiesDrop').append(blank);

        for (var i = 0; i < data.countries.length; i++) {

            if (data.countries[i].code == country) {

                for (var j = 0; j < data.countries[i].otherCities.length; j++) {

                    var option = $('<option></option>');

                    option.attr('value', data.countries[i].code);
                    option.html(data.countries[i].otherCities[j]);

                    $('#citiesDrop').append(option);
                }
            }
        }
    });
});