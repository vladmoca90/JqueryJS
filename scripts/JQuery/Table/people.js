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
            var row = $('<tr></tr>');

            var firstName = $('<td class="first-name"></td>');
            firstName.val(people[i].firstName);
            firstName.html(people[i].firstName);

            row.append(firstName);

            var lastName = $('<td class="last-name"></td>');
            lastName.val(people[i].lastName);
            lastName.html(people[i].lastName);

            row.append(lastName);

            var age = $('<td class="age"></td>');
            age.val(people[i].age);
            age.html(people[i].age);

            row.append(age);

            var country = $('<td class="country"></td>');
            country.val(people[i].nationality);
            country.html(people[i].nationality);

            row.append(country);

            $('.table tbody').append(row);
        }
    }

    addPeople(people);
});