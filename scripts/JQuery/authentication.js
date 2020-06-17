$(function() {
    let name = $('#name').val();
    let gender = $('#gender');
    let email = $('#email').val();
    let password = $('#password').val();
    let checkOut = $('#check');
    
    $('.validation-alerts p').hide();

    $('#submit').on('click', function() {
        if(name.length <= 3) {
            $('.name-alert').show();
        }
        if(email.length <= 6 || email.indexOf('@') == -1) {
            $('.email-alert').show();
        }
        if(password.length < 6) {
            $('.password-alert').show();
        }
        if(!gender.checked) {
            $('.gender-alert').show();
        }
        if(!checkOut.checked) {
            $('.checkOut-alert').show();
        }
    });
});