$(function () {
    var x = $('#demo');

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.text() == "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        x.text() == position.coords.latitude + ' ' + position.coords.longitude;
    }

     getLocation();
});