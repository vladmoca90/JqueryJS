$(function () {
    let coordinates = $('#coordinates');

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            coordinates.html("Geolocation is not supported by this browser.");
        }
    }

    const showPosition = (position) => {
        coordinates.html(position.coords.latitude + ' ' + position.coords.longitude);
    }

     getLocation();
});