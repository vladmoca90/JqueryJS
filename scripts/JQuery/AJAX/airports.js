$(function() {

    var airportsList = [];

    var airportsUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/Airports';

    $.ajax(airportsUrl, {
        method: 'GET',
        success: function(response) {
            console.log(response);

            airportsList = response.airports;
        },
        error: function (err) {
            console.err(err);
        }
    });
});