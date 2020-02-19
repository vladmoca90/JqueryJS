var data = {
    students: [
        {
            code: 'AM',
            name: 'Alexandru Mocanu',
            mark: ['8.81', '8.81', '8.81'],
        },
        {
            code: 'VM',
            name: 'Vlad Mocanu',
            mark: ['9.06', '9.06', '9.06']
        },
        {
            code: 'IAR',
            name: 'Ilinca-Alexandra Rolea',
            mark: ['9.71', '9.71', '9.71'],
        },
        {
            code: 'AD',
            name: 'Alexandru Dunca',
            mark: ['7.25', '7.25', '7.25'],
        }
    ]
}

$(function () {

    function getStudents(data) {

        if (data.students.length == 0) {
            throw new Error('The students list must be given');
        }

        var blank = $('<option value=""></option>');

        $('#student').append(blank);

        for (var i = 0; i < data.students.length; i++) {
            var option = $('<option></option>');

            option.attr('val', data.students[i].code);
            option.html(data.students[i].name);

            $('#student').append(option);
        }
    }

    $('#student').change(function () {
        $('#mark').empty();

        var selectedOption = $(this).find(':selected');
        var studentCode = selectedOption.val();

        for (var i = 0; i < data.students.length; i++) {
            var option = $('<option></option>');

            if (data.students[i].code == studentCode) {

                option.attr('val', data.students[i].code);
                option.html(data.students[i].mark);
            }

            $('#mark').append(option);
        }
    });

    getStudents(data);
});