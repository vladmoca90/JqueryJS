$(function () {

    var countries = [];

    var points = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

    var pointsDict = {};

    function buildDropdown(countries, dropdownId) {

        var countriesDrop = $(dropdownId);

        countriesDrop.empty();

        var blank = $('<option value=""></option>');

        countriesDrop.append(blank);

        for (var i = 0; i < countries.length; i++) {

            var countryOption = $('<option></option>');
            countryOption.attr('value', countries[i].code);
            countryOption.html(countries[i].name);

            countriesDrop.append(countryOption);
        }

    }

    $('#countriesDropdown').change(function() {
        var option = $(this).find(':selected');
        var countryCode = option.val();
        var countries2 = [];

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].code != countryCode) {
                countries2.push(countries[i]);
            }
        }

        buildDropdown(countries2, '#toCountryDropdown');
    });

    function createDictionary(countries) {

        for (var i = 0; i < countries.length; i++) {
            pointsDict[countries[i].code] = {
                'points': [],
                'countries': []
            }
        }
    }

    allCountriesUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/Eurovision/2018/countries';

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

    function buildSimpleDropdown(points, dropdownId) {

        var pointsDrop = $(dropdownId);

        pointsDrop.empty();

        var blank = $('<option value=""></option>');

        pointsDrop.append(blank);

        for (var i = 0; i < points.length; i++) {
            var pointsOption = $('<option></option>');
            pointsOption.attr('value', points[i]);
            pointsOption.html(points[i]);

            pointsDrop.append(pointsOption);
        }
    }

    buildSimpleDropdown(points, '#pointsDropdown');

    $('#voteCountry').on('click', function () {

        var rootUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/Eurovision/2018/countries/{fromCountry}/votes/{toCountry}';

        var fromCountry = $('#countriesDropdown').val();
        var toCountry = $('#toCountryDropdown').val();
        var pointsGiven = $('#pointsDropdown').val();

        var votesUrl = rootUrl.replace('{fromCountry}', fromCountry).replace('{toCountry}', toCountry);

        if (pointsDict[fromCountry].points.indexOf(pointsGiven) != -1) {
            return;
        }

        pointsDict[fromCountry].points.push(pointsGiven);

        if (pointsDict[fromCountry].countries.indexOf(toCountry) != -1) {
            return;
        }

        pointsDict[fromCountry].countries.push(toCountry);

        var clone = $('#countryVoteTemplate').clone();
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