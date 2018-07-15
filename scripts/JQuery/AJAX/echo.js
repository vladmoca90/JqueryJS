$(function () {

    var post = $('#echoPost');

    var destination = $('#echoDestination');

    var submit = $('#echoSubmit');

    submit.click(function () {

        var content = $('#echoPost').val();

        var json = JSON.parse(content);

        var echoUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/echo';

        $.ajax(echoUrl, {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(json),
            success: function (response) {
                console.log(response);

                $('#echoDestination').val(JSON.stringify(response));
            },
            error: function (err) {
                console.error(err);
            }
        });
    });
});