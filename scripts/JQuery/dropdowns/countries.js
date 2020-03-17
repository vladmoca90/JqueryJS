$(function () {

    function setCountries(xml) {
        var countriesDropdown = $('#makeDropdown');
        var countries = xml.find('country');

        for (var i = 0; i < countries.length; i++) {
            var country = $(countries[i]);
            var countryOption = $('<option></option>');

            countryOption.attr('value', country.attr('code'));
            countryOption.html(country.html());
            countriesDropdown.append(countryOption);
        }
        setTotalCount(countries.length);
    }

    function setTotalCount(count) {
        $('#total-value').html(count);
    }

    countriesUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/countries';

    $.ajax(countriesUrl, {
        method: 'GET',
        dataType: 'xml',
        success: function (response) {
            var xml = $(response);

            $(this).countries = setCountries(xml);
        },
        error: function (err) {
            console.error(err);
        }
    });
});