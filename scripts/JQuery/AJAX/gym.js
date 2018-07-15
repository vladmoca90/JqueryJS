$(function () {

    var enter = $('#enter');

    var exit = $('#exit');

    var register = $('#register');

    var unregister = $('#unregister');

    function errorText(errorCode) {
        if (errorCode == 100) {
            return 'You PIN must be between 6 and 12 characters';
        }
        if (errorCode == 200) {
            return 'The PIN has wrong format';
        }

        throw new Error('The error code ' + errorCode + ' is not valid.');
    }

    enter.click(function () {

        var enterUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/[pin]/enter';

        var myPin = $('#pinNumber').val();

        var pinEnterUrl = enterUrl.replace('[pin]', myPin);

        $.ajax(pinEnterUrl, {
            method: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.error(err);

                var errorCode = err.responseJSON.ErrorCode;
                var text = errorText(errorCode);
                alert(text);
            },
        });
    });
    exit.click(function () {

        var exitUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/[pin]/exit';

        var myPin = $('#pinNumber').val();

        var pinExitUrl = exitUrl.replace('[pin]', myPin);

        $.ajax(pinExitUrl, {
            method: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.error(err);

                var errorCode = err.responseJSON.ErrorCode;
                var text = errorText(errorCode);
                alert(text);
            }
        });
    });

    register.click(function () {

        var registerUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/[pin]/register';

        var myPin = $('#pinNumber').val();

        var pinRegisterUrl = registerUrl.replace('[pin]', myPin);

        $.ajax(pinRegisterUrl, {
            method: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.error(err);

                var errorCode = err.responseJSON.ErrorCode;
                var text = errorText(errorCode);
                alert(text);
            }
        });
    });

    unregister.click(function () {

        var unregisterUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/[pin]/unregister';

        var myPin = $('#pinNumber').val();

        var pinUnregisterUrl = unregisterUrl.replace('[pin]', myPin);

        $.ajax(pinUnregisterUrl, {
            method: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.error(err);

                var errorCode = err.responseJSON.ErrorCode;
                var text = errorText(errorCode);
                alert(text);
            }
        });
    });
});