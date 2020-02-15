$(function () {

    var people = [{
            firstName: 'Vlad',
            lastName: 'Mocanu',
            age: '29',
            nationality: 'Romanian',
        },
        {
            firstName: 'Val',
            lastName: 'Fellini',
            age: '50',
            nationality: 'Italian',
        },
        {
            firstName: 'Leon',
            lastName: 'Williams',
            age: '33',
            nationality: 'British',
        },
        {
            firstName: 'Klaudia',
            lastName: 'Rudna',
            age: '36',
            nationality: 'Polish',
        },
    ];

    function addPeople(people) {
        if (people.length == 0) {
            throw new Error('The data must be given');
        }

        for (var i = 0; i < people.length; i++) {
            $('.table .first-name').text(people[i].firstName);
            $('.table .last-name').text(people[i].lastName);
            $('.table .age').text(people[i].age);
            $('.table .country').text(people[i].nationality);
        }
    }

    addPeople(people);
});