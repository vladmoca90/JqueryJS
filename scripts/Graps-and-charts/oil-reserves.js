window.onload = function () {

    var chart = new CanvasJS.Chart('bar', {
        animationEnabled: true,
        dataPointWidth: 40,
        title: {
            fontSize: 21,
            fontWeight: 'lighter',
            padding: 20,
            text: 'Crude Oil Reserves vs Production, 2016',
        },
        axisX: {
            labelFontSize: 14,
        },
        axisY: {
            gridColor: '#ccc',
            title: 'Billions of Barrels',
            titleFontColor: '#4F81BC',
            titleFontSize: 16,
            lineColor: '#4F81BC',
            labelFontColor: '#4F81BC',
            labelFontSize: 12,
            tickColor: '#4F81BC'
        },
        axisY2: {
            title: 'Millions of Barrels/day',
            titleFontColor: '#C0504E',
            titleFontSize: 16,
            lineColor: '#C0504E',
            labelFontColor: '#C0504E',
            labelFontSize: 12,
            tickColor: '#C0504E'
        },
        toolTip: {
            shared: true
        },
        data: [{
                type: 'column',
                name: 'Proven Oil Reserves (bn)',
                legendText: 'Proven Oil Reserves',
                fillOpacity: .75,
                showInLegend: true,
                dataPoints: [{
                        label: 'Saudi Arabia',
                        y: 266.21
                    },
                    {
                        label: 'Venezuela',
                        y: 302.25
                    },
                    {
                        label: 'Iran',
                        y: 157.20
                    },
                    {
                        label: 'Iraq',
                        y: 148.77
                    },
                    {
                        label: 'Kuwait',
                        y: 101.50
                    },
                    {
                        label: 'UAE',
                        y: 97.8
                    }
                ]
            },
            {
                type: 'column',
                name: 'Oil Production (million/day)',
                legendText: 'Oil Production',
                axisYType: 'secondary',
                fillOpacity: .75,
                showInLegend: true,
                dataPoints: [{
                        label: 'Saudi Arabia',
                        y: 10.46
                    },
                    {
                        label: 'Venezuela',
                        y: 2.27
                    },
                    {
                        label: 'Iran',
                        y: 3.99
                    },
                    {
                        label: 'Iraq',
                        y: 4.45
                    },
                    {
                        label: 'Kuwait',
                        y: 2.92
                    },
                    {
                        label: 'UAE',
                        y: 3.1
                    }
                ]
            }
        ]
    });

    chart.render();
}