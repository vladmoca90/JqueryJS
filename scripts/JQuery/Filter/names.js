var names = [{
        name: "Vlad Mocanu",
    },
    {
        name: "Alexandru Mocanu",
    },
    {
        name: "Rebecca Docherty",
    },
    {
        name: "Leon Williams",
    },
    {
        name: "Klaudia Rudna",
    },
    {
        name: "Libo Bian",
    },
    {
        name: "Zubair Hossain",
    },
    {
        name: "Phil Gill",
    },
    {
        name: "Liam Monticelli",
    },
    {
        name: "Dara Djakovic",
    },
];

$(function () {

    function addNamesToDropdown(names) {
        if (names.length == 0) {
            throw new Error('The list with names must be provided');
        }

        for (var i = 0; i < names.length; i++) {
            var option = $('<option></option>');

            $('#names').append(option);
            $('option:nth-of-type(1)').attr('disabled', 'disabled');
            option.html(names[i].name);
        }
    }

    addNamesToDropdown(names);

    function addNamesToList(names) {
        if (names.length == 0) {
            throw new Error('The list with names must be provided');
        }

        for (var i = 0; i < names.length; i++) {
            var nameItem = $('<li></li>');

            $('#namesList').append(nameItem);
            nameItem.html(names[i].name);
        }
    }

    addNamesToList(names);

    function showSelectedElement(names) {
        var selected = $('#names').find(':selected');
    }
});