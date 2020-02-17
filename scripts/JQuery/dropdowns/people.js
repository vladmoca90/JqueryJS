var data = {
    persons: [
        {
            name: 'Ana-Maria Magureanu',
            age: '29',
            occupation: 'Farmacist',
        },
        {
            name: 'Vladimir Krushchev',
            age: '35',
            occupation: 'Design Manager',
        },
        {
            name: 'Alexander Swift',
            age: '25',
            occupation: 'Junior Front End Developer',
        },
        {
            name: 'Caitlin Morgan',
            age: '30',
            occupation: 'IT Recruiter',
        }
    ]
}

$(function () {

    var button = $('.dropdown__button');

    var list = $('.dropdown__list');

    button.on('click', function () {
        list.slideToggle(250);
    });

    function addNames(data) {

        if (data.persons.length == 0) {
            throw new Error('The persons list must be given');
        }

        for (i = 0; i < data.persons.length; i++) {
            var nameOption = $('<li class="dropdown__list-item"></li>');

            nameOption.val(data.persons[i].name);
            nameOption.html(data.persons[i].name);

            $('.dropdown__list').append(nameOption);
        }
    }

    addNames(data);
});