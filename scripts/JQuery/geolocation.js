$(function () {
    let coordinates = $('#coordinates');

    const getCurrentLocation = () => {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition) : coordinates.html("Geolocation is not supported by this browser.");
    }

    const showPosition = position => {
        coordinates.html(position.coords.latitude + ' ' + position.coords.longitude);
    }

    getCurrentLocation();
});