new Chart(document.getElementById("bubble"), {
    "type": "bubble",
    "data": {
        "datasets": [{
            "label": "First Dataset",
            "data": [{
                "x": 16,
                "y": 10,
                "r": 6,
            }, {
                "x": 16,
                "y": 4,
                "r": 6,
            }],
            "backgroundColor": "rgb(255, 99, 132)"
        }]
    }
});