new Chart(document.getElementById("scattered"), {
    "type": "scatter",
    "data": {
        "labels": ["Aquablue"],
        "datasets": [{
            "label": "Population growth",
            "data": [
                {
                    x: 63,
                    y: 5,
                    r: 5,
                },
                {
                    x: 3,
                    y: 3,
                    r: 5,
                },
            ],
            "backgroundColor": [
                "rgb(75, 213, 247)", 
            ]
        }]
    }
});