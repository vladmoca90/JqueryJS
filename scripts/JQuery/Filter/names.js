var names = [{
        name: "Vlad Mocanu",
        id: 20,
    },
    {
        name: "Alexandru Mocanu",
        id: 20,
    },
    {
        name: "Jamie Burton",
        id: 11,
    },
    {
        name: "Rebecca Docherty",
        id: 27,
    },
    {
        name: "Leon Williams",
        id: 7,
    },
    {
        name: "Klaudia Rudna",
        id: 16,
    },
    {
        name: "Libo Bian",
        id: 20,
    },
    {
        name: "Gabriela-Simina Adamescu",
        id: 11,
    },
    {
        name: "Zubair Hossain",
        id: 15,
    },
    {
        name: "Phil Gill",
        id: 9,
    },
    {
        name: "Liam Monticelli",
        id: 30,
    },
    {
        name: "Dara Djakovic",
        id: 21,
    },
    {
        name: "Andreea-Corina Nisipeanu",
        id: 20,
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
            option.attr('value', names[i].name);
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

    $('#names').change(function () {
        var selected = $(this).find(':selected');
        var selectedOption = selected.val();

        $('#namesList li').remove();

        if (selectedOption) {
            var listItem = $('<li></li>');
            var selectedName = listItem.html(selectedOption);

            $('#namesList').append(selectedName);
        }
        if(selectedOption == $('#names').eq(0)) {

        }
    });
});