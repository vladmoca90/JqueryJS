$(function() {
    citiesUrl = 'https://api.meetup.com/2/cities';

    $.ajax(citiesUrl, {
        method:'GET',
        success: function(response) {
            console.log(response);
        },
        error: function(err) {
            console.error(err);
        },
    });
});