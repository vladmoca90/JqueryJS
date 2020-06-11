$(function() {
    let name = $('#name');
    let gender = $('#gender');
    let email = $('#email');
    let password = $('#password');
    let check = $('#check');

    $('#submit').on('click', function() {
        if(name.length < 3) {
            throw new Error('');
        }
        if(email.length < 3 || email.indexOf('@') == -1) {
            throw new Error('');
        }
    });
}