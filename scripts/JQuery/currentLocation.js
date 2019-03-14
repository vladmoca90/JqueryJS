$(function () {

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            $('#coordinates').html("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        $('#coordinates').html(position.coords.latitude + ' ' + position.coords.longitude);
    }

     getLocation();
});