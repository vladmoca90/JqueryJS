$(function () {

    const flights = [{
            airline: "Air Algerie",
            destinations: "Algiers",
        },
        {
            airline: "Air France",
            destinations: "Paris-Charles de Gaulle",
        },
        {
            airline: "Avianca",
            destinations: "Bogota-El Dorado",
        },
        {
            airline: "Brussels Airlines",
            destinations: "Brussels-International",
        },
        {
            airline: "Cathay Pacific",
            destinations: "Hong Kong",
        },
        {
            airline: "El Al",
            destinations: "Tel Aviv-Ben Gurion",
        },
        {
            airline: "Hainan Airlines",
            destinations: ["Beijing-Capital", "Shanghai-Pudong"],
        },
        {
            airline: "Iran Air",
            destinations: "Teheran-Khomeini",
        },
        {
            airline: "Japan Airlines",
            destinations: "Tokyo-Haneda",
        },
        {
            airline: "KLM",
            destinations: "Amsterdam",
        },
        {
            airline: "Lufthansa",
            destinations: ["Frankfurt", "Munich"],
        },
        {
            airline: "Mexicana",
            destinations: "Mexico City",
        },
        {
            airline: "Royal Air Jordanian",
            destinations: "Amman-Queen Alia",
        },
        {
            airline: "Oman Air",
            destinations: "Muscat",
        },
        {
            airline: "Turkish Airlines",
            destinations: "Istanbul-Ataturk",
        },
        {
            airline: "United Airlines",
            destinations: ["Chicago-O'Hare", "Dallas-Fort Worth", "Houston-Intercontinental", "Los Angeles", "Newark", "San Francisco"],
        },
        {
            airline: "Virgin Atlantic",
            destinations: ["Atlanta", "Boston", "Delhi", "Havana", "Hong Kong", "Johannesburg", "Lagos", "Las Vegas", "Los Angeles", "Miami", "Mumbai", "New York–JFK", "Newark", "San Francisco", "São Paulo–Guarulhos", "Seattle/Tacoma", "Shanghai–Pudong", "Tel Aviv-Ben Gurion", "Washington–Dulles"],
        }
    ];

    function addFlights(flights) {
        if(flights.length == 0) {
            throw new Error('The list must be provided.');
        }

        let content = $('.table-content');

        for (var i = 0; flights.length; i++) {
            let row = $('<tr></tr>');
            let order = $('<td data-id="order"></td>');
            let airline = $('<td data-id="airline"></td>');
            let destinations = $('<td data-id="destinations"></td>');

            content.append(row);

            row.append(order);
            order.html(flights.indexOf(flights[i + 1]));

            row.append(airline);
            airline.html(flights[i].airline);

            row.append(destinations);
            destinations.html(flights[i].destinations);
        }
    }

    addFlights(flights);
});