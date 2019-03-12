$(function () {

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            $('#demo').html("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        $('#demo').html(position.coords.latitude.toFixed(2) + ' ' + position.coords.longitude.toFixed(2));
    }

     getLocation();
});