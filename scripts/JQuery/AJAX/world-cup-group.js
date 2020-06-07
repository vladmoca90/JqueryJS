$(function () {

    const getSelectedGroup = group => {
        let table = $('<table class="world-cup-table table table-bordered"></table>');
        let tableHead = $('<thead class="table-head"></thead>');
        let heading = $('<th colspan="6"></th>');

        heading.html(group.groupLabel);

        $('#main').append(table);
        table.append(tableHead);
        tableHead.append(heading);

        for (let i = 0; i < group.countries.length; i++) {
            let tableBody = $('<tbody class="table-body"></tbody>');
            let row = $('<tr></tr>');
            let name = $('<td></td>');
            let matches = $('<td></td>');
            let wins = $('<td></td>');
            let draws = $('<td></td>');
            let loses = $('<td></td>');
            let points = $('<td></td>');

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

    let currentUrl = window.location.href;
    let beforeQuery = currentUrl.indexOf('group='); //98 is the first index
    let query = currentUrl.substring(beforeQuery + 'group='.length); //returns the last element of the url
    let groupUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/WorldCup/2018/groups/{groupLabel}';
    let selectedGroupUrl = groupUrl.replace('{groupLabel}', query);

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