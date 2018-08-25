var data = {
    lines: [{
            name: 'Bakerloo',
            status: 'Good service',
        },
        {
            name: 'Central',
            status: 'Good service',
        },
        {
            name: 'Circle',
            status: 'Good service',
        },
        {
            name: 'District',
            status: 'Partially closed',
        },
        {
            name: 'Hammersmith & city',
            status: 'Partially closed',
        },
        {
            name: 'Jubilee',
            status: 'Good service',
        },
        {
            name: 'Metropolitan',
            status: 'Partially closed',
        },
        {
            name: 'Northern',
            status: 'Good service',
        },
        {
            name: 'Picadilly',
            status: 'Good service',
        },
        {
            name: 'Victoria',
            status: 'Good service',
        },
        {
            name: 'Waterloo & city',
            status: 'Closed',
        },
        {
            name: 'London Overground',
            status: 'Good service',
        },
        {
            name: 'Tfl Rail',
            status: 'Good service',
        },
        {
            name: 'DLR',
            status: 'Good service',
        },
        {
            name: 'Tram',
            status: 'Good service',
        },
    ]
}

$(function () {

    function getTubeLines(data) {

        if (data.lines.length == 0) {
            throw new Error('The line names and statuses must be given');
        }

        var body = $('.tube__body');

        for (i = 0; i < data.lines.length; i++) {
            var row = $('<tr></tr>');
            body.append(row);

            var tubeLines = $('<td class="tube__lines"></td>');
            var linesStatus = $('<td class="tube__status"></td>');

            tubeLines.val(data.lines[i].name);
            tubeLines.html(data.lines[i].name);

            row.append(tubeLines);

            linesStatus.val(data.lines[i].status);
            linesStatus.html(data.lines[i].status);

            row.append(linesStatus);
        }
    }

    getTubeLines(data);

    function addStatusColors(data) {

        for (i = 0; i < data.lines.length; i++) {
            if (data.lines[i].status == 'Partially closed') {
                $('.tube__status').css('color', '#ff4560');
            }
            if (data.lines[i].status == 'Closed') {
                $('.tube__status').css('color', '#cb2000');
            }
        }
    }

    addStatusColors(data);
});