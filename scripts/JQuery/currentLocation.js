$(function () {

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            $('#demo').html("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        $('#demo').html(position.coords.latitude + ' ' + position.coords.longitude);
    }

     getLocation();
});