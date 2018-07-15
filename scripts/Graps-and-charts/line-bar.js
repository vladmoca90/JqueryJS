new Chart(document.getElementById("line-bar"), {
    "type": "line",
    "data": {
        "labels": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "datasets": [{
            "label": "Average precipitation by month in Bucharest, Romania",
            "data": [37, 37, 44, 50, 56, 83, 70, 56, 64, 53, 46, 48],
            "fill": false,
            "borderColor": "rgb(75, 192, 220, 1)",
            "lineTension": 0.1,
        }]
    },
    "options": {}
});