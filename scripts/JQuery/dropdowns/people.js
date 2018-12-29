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

    var dropBtn = $('.dropdown__button');

    var dropList = $('.dropdown__list');

    dropBtn.on('click', function () {
        dropList.slideToggle(250);
    });

    function addNamesToTable(data) {

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

    addNamesToTable(data);
});