var data = {
    departures: [
        {
            airline: 'Lufthansa',
            number: 'DE1502',
            destination: 'Frankfurt',
            scheduled: '7:05',
            expected: 'On time',
            terminal: '4',
            checkIn: '25-30',
            gate: '29B',
        },
        {
            airline: 'Air France',
            number: 'AF465',
            destination: 'Paris-Charles de Gaulle',
            scheduled: '13:30',
            expected: '13:45',
            terminal: '4',
            checkIn: '77-81',
            gate: '7A',
        },
        {
            airline: 'Turkish Airlines',
            number: 'TK1498',
            destination: 'Istanbul-Ataturk',
            scheduled: '11:45',
            expected: 'On time',
            terminal: '2',
            checkIn: '1-4',
            gate: '17D',
        },
        {
            airline: 'TAROM',
            number: 'RO5365',
            destination: 'Bucharest-Otopeni',
            scheduled: '15:10',
            expected: '15:25',
            terminal: '4',
            checkIn: '59-60',
            gate: '15C',
        },
        {
            airline: 'Delta Airlines',
            number: 'DL133',
            destination: 'New York-JFK',
            scheduled: '12:20',
            expected: '12:40',
            terminal: '2',
            checkIn: '30-35',
            gate: '20A',
        },
        {
            airline: 'Air China',
            number: 'CH49',
            destination: 'Beijing-Capital',
            scheduled: '17:15',
            expected: '17:50',
            terminal: '4',
            checkIn: '11-13',
            gate: '75C',
        },
        {
            airline: 'Asiana Airlines',
            number: 'AS743',
            destination: 'Seoul-Incheon',
            scheduled: '11:30',
            expected: '12:11',
            terminal: '3',
            checkIn: '17-18',
            gate: '33B',
        },
        {
            airline: 'Alitalia',
            number: 'AZ3365',
            destination: 'Rome-Fiumicino',
            scheduled: '9:45',
            expected: '10:00',
            terminal: '2',
            checkIn: '4-6',
            gate: '10B',
        },
    ],
}

$(function () {
    function addDepartures(data) {
        if (data.departures.length == 0) {
            throw new Error('The departures list must be given');
        }

        var body = $('#airlinesBody');

        for (i = 0; i < data.departures.length; i++) {
            var row = $('<tr></tr>');
            body.append(row);

            var airline = $('<td class="airline"></td>');
            airline.html(data.departures[i].airline);
            airline.val(data.departures[i].airline);

            row.append(airline);

            var airlNumber = $('<td class="number"></td>');
            airlNumber.html(data.departures[i].number);
            airlNumber.val(data.departures[i].number);

            row.append(airlNumber);

            var dest = $('<td class="destination"></td>');
            dest.html(data.departures[i].destination);
            dest.val(data.departures[i].destination);

            row.append(dest);

            var scheduled = $('<td class="scheduled"></td>');
            scheduled.html(data.departures[i].scheduled);
            scheduled.val(data.departures[i].scheduled);

            row.append(scheduled);

            var expected = $('<td class="expected"></td>');
            expected.html(data.departures[i].expected);
            expected.val(data.departures[i].expected);

            row.append(expected);

            var terminal = $('<td class="terminal"></td>');
            terminal.html(data.departures[i].terminal);
            terminal.val(data.departures[i].terminal);

            row.append(terminal);

            var check = $('<td class="check-in"></td>');
            check.html(data.departures[i].checkIn);
            check.val(data.departures[i].checkIn);

            row.append(check);

            var gate = $('<td class="gate"></td>');
            gate.html(data.departures[i].gate);
            gate.val(data.departures[i].gate);

            row.append(gate);
        }
    }

    addDepartures(data);
});