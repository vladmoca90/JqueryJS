$(function() {
    let airportsUrl = 'https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json';

    $.ajax(airportsUrl, {
        method: 'GET',
        success: function(response) {
            console.log(response);

            airportsList = response.airports;
        },
        error: function (err) {
            console.err(err);
        },
        complete: function() {
            $('img').addClass('hidden');
        }
    });
});