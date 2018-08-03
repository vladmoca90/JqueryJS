 window.onload = function () {
     var chart = new CanvasJS.Chart('sales-bar', {
         title: {
             fontSize: 21,
             text: 'Evening Sales of a Restaurant'
         },
        axisY: {
            gridDashType: 'dash',
            gridColor: '#ccc',
        },
         data: [{
                fillOpacity: 1,
                 type: 'stackedBar',
                 dataPoints: [{
                         x: new Date(2012, 01, 1),
                         y: 22
                     },
                     {
                         x: new Date(2012, 02, 1),
                         y: 75
                     },
                     {
                         x: new Date(2012, 03, 1),
                         y: 90
                     },
                     {
                         x: new Date(2012, 04, 1),
                         y: 65
                     },
                     {
                         x: new Date(2012, 05, 1),
                         y: 30
                     }

                 ]
             },
             {
                 type: 'stackedBar',
                 dataPoints: [{
                         x: new Date(2012, 01, 1),
                         y: 71
                     },
                     {
                         x: new Date(2012, 02, 1),
                         y: 55
                     },
                     {
                         x: new Date(2012, 03, 1),
                         y: 50
                     },
                     {
                         x: new Date(2012, 04, 1),
                         y: 65
                     },
                     {
                         x: new Date(2012, 05, 1),
                         y: 95
                     }

                 ]
             },
             {
                 type: 'stackedBar',
                 dataPoints: [{
                         x: new Date(2012, 01, 1),
                         y: 71
                     },
                     {
                         x: new Date(2012, 02, 1),
                         y: 155
                     },
                     {
                         x: new Date(2012, 03, 1),
                         y: 10
                     },
                     {
                         x: new Date(2012, 04, 1),
                         y: 65
                     },
                     {
                         x: new Date(2012, 05, 1),
                         y: 95
                     }

                 ]
             },

             {
                 type: 'stackedBar',
                 dataPoints: [{
                         x: new Date(2012, 01, 1),
                         y: 11
                     },
                     {
                         x: new Date(2012, 02, 1),
                         y: 75
                     },
                     {
                         x: new Date(2012, 03, 1),
                         y: 20
                     },
                     {
                         x: new Date(2012, 04, 1),
                         y: 85
                     },
                     {
                         x: new Date(2012, 05, 1),
                         y: 85
                     }

                 ]
             },
             {
                 type: 'stackedBar',
                 dataPoints: [{
                         x: new Date(2012, 01, 1),
                         y: 20
                     },
                     {
                         x: new Date(2012, 02, 1),
                         y: 135
                     },
                     {
                         x: new Date(2012, 03, 1),
                         y: 30
                     },
                     {
                         x: new Date(2012, 04, 1),
                         y: 45
                     },
                     {
                         x: new Date(2012, 05, 1),
                         y: 125
                     }

                 ]
             }

         ]
     });

     chart.render();
 }