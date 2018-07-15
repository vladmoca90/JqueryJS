new Chart(document.getElementById("donut-chart"), {
    "title": "Doughnut pie chart",
    "type": "doughnut",
    "data": {
        "labels": ["Desktop", "Tablet", "Mobile"],
        "datasets": [{
            "backgroundColor": [
                "rgb(205, 59, 188)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            "borderWidth": 2,
            "data": [38, 17, 45],
        }],
    },
    "options": {
        "responsive": true,
        "title": {
            "display": true,
            "text": "Devices",
        },
    },
});