var data = {
    lines: [{
            name: 'Bakerloo',
            status: 'Good service',
            id: 1,
        },
        {
            name: 'Central',
            status: 'Good service',
            id: 1,
        },
        {
            name: 'Circle',
            status: 'Good service',
            id: 1,
        },
        {
            name: 'District',
            status: 'Partially closed',
            id: 2,
        },
        {
            name: 'Hammersmith & city',
            status: 'Partially closed',
            id: 2,
        },
        {
            name: 'Jubilee',
            status: 'Good service',
            id: 1,
        },
        {
            name: 'Metropolitan',
            status: 'Partially closed',
            id: 2,
        },
        {
            name: 'Northern',
            status: 'Good service',
            id: 1,
        },
        {
            name: 'Picadilly',
            status: 'Good service',
            id: 1,
        },
        {
            name: 'Victoria',
            status: 'Good service',
            id: 1,
        },
        {
            name: 'Waterloo & city',
            status: 'Closed',
            id: 3,
        },
        {
            name: 'London Overground',
            status: 'Good service',
            id: 1,
        },
        {
            name: 'Tfl Rail',
            status: 'Good service',
            id: 1,
        },
        {
            name: 'DLR',
            status: 'Good service',
            id: 1,
        },
        {
            name: 'Tram',
            status: 'Good service',
            id: 1,
        },
    ]
}

$(function () {

    function getTubeLines(data) {

        if (data.lines.length == 0) {
            throw new Error('The line names and statuses must be given');
        }

        for (i = 0; i < data.lines.length; i++) {
            var row = $('<tr></tr>');
            var tubeLines = $('<td class="tube__lines"></td>');
            var linesStatus = $('<td class="tube__status"></td>');


            tubeLines.val(data.lines[i].name);
            tubeLines.html(data.lines[i].name);
            linesStatus.val(data.lines[i].status);
            linesStatus.html(data.lines[i].status);

            $('.tube__body').append(row);
            row.append(tubeLines);
            row.append(linesStatus);
        }
    }

    getTubeLines(data);

    function addStatusColors(data) {

        for (i = 0; i < data.lines.length; i++) {

        }
    }

    addStatusColors(data);
});