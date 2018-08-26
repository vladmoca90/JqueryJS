$(function() {

    var airportsList = [];

    function getAirports(airportsList) {
        if(airportsList.length == 0) {
            
            throw new Error('The airports list must be given');
        }

        for(var i = 0; i < airportsList.length; i++) {
            airportsList.push(airports);
        }
    }

    var airportsUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/Airports';

    $.ajax(airportsUrl, {
        method: 'GET',
        success: function(response) {
            getAirports(response.airportsList);
        },
        error: function (err) {
            console.err(err);
        }
    });
});