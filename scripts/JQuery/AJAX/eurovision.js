$(function () {
    let countries = [];
    let points = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];
    let pointsDict = {};

    const buildDropdown = (countries, dropdownId) => {
        let countriesDrop = $(dropdownId);
        countriesDrop.empty();
        let blank = $('<option value=""></option>');

        countriesDrop.append(blank);

        for(let i = 0; i < countries.length; i++) {
            let countryOption = $('<option></option>');
            countryOption.attr('value', countries[i].code);
            countryOption.html(countries[i].name);

            countriesDrop.append(countryOption);
        }

    }

    $('#countriesDropdown').change(function() {
        let option = $(this).find(':selected');
        let countryCode = option.val();
        let countries2 = [];

        for(let i = 0; i < countries.length; i++) {
            if (countries[i].code != countryCode) {
                countries2.push(countries[i]);
            }
        }

        buildDropdown(countries2, '#toCountryDropdown');
    });

    const createDictionary = countries => {
        for(let i = 0; i < countries.length; i++) {
            pointsDict[countries[i].code] = {
                'points': [],
                'countries': []
            }
        }
    }

    let allCountriesUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/Eurovision/2018/countries';

    $.ajax(allCountriesUrl, {
        method: 'GET',
        success: function (response) {
            countries = response.countries;

            buildDropdown(countries, '#countriesDropdown');
            createDictionary(countries);
        },
        error: function (err) {
            console.error(err);
        }
    });

    const buildSimpleDropdown = (points, dropdownId) => {
        let pointsDrop = $(dropdownId);
        pointsDrop.empty();

        let blank = $('<option value=""></option>');
        pointsDrop.append(blank);

        for(let i = 0; i < points.length; i++) {
            let pointsOption = $('<option></option>');
            pointsOption.attr('value', points[i]);
            pointsOption.html(points[i]);

            pointsDrop.append(pointsOption);
        }
    }

    buildSimpleDropdown(points, '#pointsDropdown');

    $('#voteCountry').on('click', function () {
        let rootUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/Eurovision/2018/countries/{fromCountry}/votes/{toCountry}';

        let fromCountry = $('#countriesDropdown').val();
        let toCountry = $('#toCountryDropdown').val();
        let pointsGiven = $('#pointsDropdown').val();

        let votesUrl = rootUrl.replace('{fromCountry}', fromCountry).replace('{toCountry}', toCountry);

        if (pointsDict[fromCountry].points.indexOf(pointsGiven) != -1) {
            return;
        }

        pointsDict[fromCountry].points.push(pointsGiven);

        if (pointsDict[fromCountry].countries.indexOf(toCountry) != -1) {
            return;
        }

        pointsDict[fromCountry].countries.push(toCountry);

        let clone = $('#countryVoteTemplate').clone();
        clone.removeAttr('id');

        $('.dropdown-container').after(clone);

        clone.find('.voteFrom').html(fromCountry);
        clone.find('.voteTo').html(toCountry);
        clone.find('.points').html(pointsGiven);

        clone.find('.delete-row').on('click', function () {
            $(this).parent('.template').remove();
        });

        $('#pointsDropdown :selected').remove();
        $('#toCountryDropdown :selected').remove();

        $.ajax(votesUrl, {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                'votes': $('#pointsDropdown').val(),
            }),
            success: function (response) {
                points = response.points;
            },
            error: function (err) {
                console.error(err);
            }
        });
    });
});