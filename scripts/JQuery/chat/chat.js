$(function () {
    $(".delete-button").on('click', function() {
        $(this).parent().remove();
    });
});