new Chart(document.getElementById("simple-chart"), {
    "title": "Simple pie chart",
    "type": "pie",
    "data": {
        "labels": ["Alexandru", "Vlad", "Andreea", "Ana Maria", "Cristian", "Marius", "Ionel"],
        "datasets": [{
            "backgroundColor": [
                "rgb(2, 59, 19)",
                "rgb(177, 255, 200)",
                "rgb(205, 59, 188)",
                "rgb(154, 99, 165)",
                "rgb(55, 25, 86)",
                "rgb(34, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            "borderWidth": 2,
            "data": [15, 1, 15, 7, 13, 45, 4],
        }],
    },
    "options": {
        "responsive": true,
        "title": {
            "display": true,
            "text": "People",
        },
    },
});