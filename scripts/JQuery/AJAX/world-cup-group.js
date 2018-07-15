$(function () {

    function getSelectedGroup(group) {

        var table = $('<table class="world-cup-table table table-bordered"></table>');
        var tableHead = $('<thead class="table-head"></thead>');
        var heading = $('<th colspan="6"></th>');

        heading.val(group.groupLabel);
        heading.html(group.groupLabel);

        $('#main').append(table);
        table.append(tableHead);
        tableHead.append(heading);

        for (var i = 0; i < group.countries.length; i++) {
            var tableBody = $('<tbody class="table-body"></tbody>');
            var row = $('<tr></tr>');
            var name = $('<td></td>');
            var matches = $('<td></td>');
            var wins = $('<td></td>');
            var draws = $('<td></td>');
            var loses = $('<td></td>');
            var points = $('<td></td>');

            name.val(group.countries[i].name);
            name.html(group.countries[i].name);
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

    var currentUrl = window.location.href;
    var beforeQuery = currentUrl.indexOf('group='); //98 is the first index
    var query = currentUrl.substring(beforeQuery + 'group='.length); //returns the last element of the url
    var groupUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/WorldCup/2018/groups/{groupLabel}';
    var selectedGroupUrl = groupUrl.replace('{groupLabel}', query);

    $.ajax(selectedGroupUrl, {
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            group = response.group;

            getSelectedGroup(group);
        },
        error: function (err) {
            console.error(err);
        }
    });
});