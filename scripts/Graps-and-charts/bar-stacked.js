var ctx = document.getElementById("bar-stacked").getContext('2d');

var myStackedBar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Main graph"],
        datasets: [{
                data: [7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.25)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 2,
            },
            {
                data: [3],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.25)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 2,
            },
            {
                data: [12],
                backgroundColor: [
                    'rgba(225, 99, 165, 0.25)',
                ],
                borderColor: [
                    'rgba(225, 99, 165, 1)',
                ],
                borderWidth: 2,
            },
            {
                data: [1],
                backgroundColor: [
                    'rgba(105, 109, 250, 0.25)',
                ],
                borderColor: [
                    'rgba(105, 109, 250, 1)',
                ],
                borderWidth: 2,
            },
        ]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});