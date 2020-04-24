$(function () {
    let coordinates = $('#coordinates');

    const getCurrentLocation = () => {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition) 
                              : coordinates.html('Geolocation is not supported by this browser.');
    }

    const showPosition = position => {
        let currentLat = position.coords.latitude;
        let currentLong = position.coords.latitude;

        coordinates.html(currentLat.toFixed(4) + ' ' + currentLong.toFixed(4));
    }

    getCurrentLocation();
});