$(function () {

    // let post = $('#echoPost');
    // let destination = $('#echoDestination');
    let submit = $('#echoSubmit');

    submit.on('click', function () {

        let content = $('#echoPost').val();
        let json = JSON.parse(content);
        let echoUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/echo';

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