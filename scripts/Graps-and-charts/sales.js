 window.onload = function () {
     var chart = new CanvasJS.Chart('stacked-bar', {
         title: {
             text: 'Evening Sales of a Restaurant'
         },

         data: [{
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
                         y: 61
                     },
                     {
                         x: new Date(2012, 02, 1),
                         y: 75
                     },
                     {
                         x: new Date(2012, 03, 1),
                         y: 80
                     },
                     {
                         x: new Date(2012, 04, 1),
                         y: 85
                     },
                     {
                         x: new Date(2012, 05, 1),
                         y: 105
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
                         y: 35
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
                         y: 25
                     }

                 ]
             }

         ]
     });

     chart.render();
 }