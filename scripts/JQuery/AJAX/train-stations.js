$(function() {

    function populateDropWithStations(stations) {

    }

    var stationsUrl = 'http://trainticketmachine456.azurewebsites.net/api/stations/rdg';

    $.ajax(stationsUrl, {
        methid:'GET',
        success: function(response) {

        },
        error: function(err) {
            console.log(err);
        }
    });
});