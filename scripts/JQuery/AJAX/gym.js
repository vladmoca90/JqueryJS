$(function () {
    let enter = $('#enter');
    let exit = $('#exit');
    let register = $('#register');
    let unregister = $('#unregister');

    const errorText = errorCode => {
        if (errorCode == 100) {
            return 'You PIN must be between 6 and 12 characters';
        }
        if (errorCode == 200) {
            return 'The PIN has wrong format';
        }

        throw new Error('The error code ' + errorCode + ' is not valid.');
    }

    enter.on('click', function () {
        let enterUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/[pin]/enter';
        let myPin = $('#pinNumber').val();
        let pinEnterUrl = enterUrl.replace('[pin]', myPin);

        $.ajax(pinEnterUrl, {
            method: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.error(err);

                let errorCode = err.responseJSON.ErrorCode;
                let text = errorText(errorCode);
                alert(text);
            },
        });
    });
    exit.on('click', function () {
        let exitUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/[pin]/exit';
        let myPin = $('#pinNumber').val();
        let pinExitUrl = exitUrl.replace('[pin]', myPin);

        $.ajax(pinExitUrl, {
            method: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.error(err);

                let errorCode = err.responseJSON.ErrorCode;
                let text = errorText(errorCode);
                alert(text);
            }
        });
    });

    register.on('click', function () {
        let registerUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/[pin]/register';
        let myPin = $('#pinNumber').val();
        let pinRegisterUrl = registerUrl.replace('[pin]', myPin);

        $.ajax(pinRegisterUrl, {
            method: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.error(err);

                let errorCode = err.responseJSON.ErrorCode;
                let text = errorText(errorCode);
                alert(text);
            }
        });
    });

    unregister.on('click', function () {
        let unregisterUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/[pin]/unregister';
        let myPin = $('#pinNumber').val();
        let pinUnregisterUrl = unregisterUrl.replace('[pin]', myPin);

        $.ajax(pinUnregisterUrl, {
            method: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.error(err);

                let errorCode = err.responseJSON.ErrorCode;
                let text = errorText(errorCode);
                alert(text);
            }
        });
    });
});