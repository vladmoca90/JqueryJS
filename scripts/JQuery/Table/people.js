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
            $('.table tr>td').eq(0).text(people[i].firstName);
            $('.table tr>td').eq(1).text(people[i].lastName);
            $('.table tr>td').eq(2).text(people[i].age);
            $('.table tr>td').eq(3).text(people[i].nationality);
        }
    }

    addPeople(people);
});