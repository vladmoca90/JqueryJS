//when you click on a group, it will open another page
//add group label on the query string
//on that page you read the query string
//you use the endpoint that return s a single group, only the selected one

$(function () {

    function getGroups(groups) {

        if (groups.length == 0) {
            throw new Error('The groups list must be given');
        }

        for (var i = 0; i < groups.length; i++) {
            var groupLink = $('<a class="table-links"></a>');
            var table = $('<table class="world-cup-table table table-bordered"></table>');
            var tableHead = $('<thead class="table-head"></thead>');
            var heading = $('<th colspan="6"></th>');

            groupLink.attr('href', 'world-cup-group.html?group=' + groups[i].groupLabel);

            heading.val(groups[i].groupLabel);
            heading.html(groups[i].groupLabel);

            $('#main').append(groupLink);
            groupLink.append(table);
            table.append(tableHead);
            tableHead.append(heading);

            for (var j = 0; j < groups[i].countries.length; j++) {
                var tableBody = $('<tbody class="table-body"></tbody>');
                var row = $('<tr></tr>');
                var name = $('<td></td>');
                var matches = $('<td></td>');
                var wins = $('<td></td>');
                var draws = $('<td></td>');
                var loses = $('<td></td>');
                var points = $('<td></td>');

                name.html(groups[i].countries[j].name);
                matches.html(0);
                wins.html(0);
                draws.html(0);
                loses.html(0);
                points.html(0);

                table.append(tableBody);
                tableBody.append(row);
                row.append(name);
                row.append(matches);
                row.append(wins);
                row.append(draws);
                row.append(loses);
                row.append(points);
            }
        }
    }

    var groupsUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/WorldCup/2018/groups';

    $.ajax(groupsUrl, {
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            groups = response.groups;

            getGroups(groups);
        },
        error: function (err) {
            console.error(err);
        }
    });
});