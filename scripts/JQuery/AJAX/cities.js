$(function() {

    const getCity = results => {

    }

    citiesUrl = 'https://api.meetup.com/2/cities';

    $.ajax(citiesUrl, {
        method:'GET',
        success: function(response) {
            console.log(response);
            results = response.results;

            getCity(response);
        },
        error: function(err) {
            console.error(err);
        },
    });
});