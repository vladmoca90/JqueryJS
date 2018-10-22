$(function () {

    var products = [];

    function addNamesToDropdown(names) {
        if (names.length == 0) {
            throw new Error('The list with names must be provided');
        }

        for (var i = 0; i < names.length; i++) {
            var option = $('<option></option>');

            $('#names').append(option);
            option.html(names[i].name);
        }
    }

    addNamesToDropdown(names);
});