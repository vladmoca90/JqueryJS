 window.onload = function () {
     var chart = new CanvasJS.Chart('step-area', {
         title: {
             text: 'StepArea Chart Demo'
         },
         data: [{
             color: '#345001';
             type: 'stepArea',
             dataPoints: [
                 {
                     x: new Date(2008, 02),
                     y: 12.00
                 },
                 {
                     x: new Date(2008, 03),
                     y: 18.50
                 },
                 {
                     x: new Date(2008, 04),
                     y: 15.00
                 },
                 {
                     x: new Date(2008, 05),
                     y: 11.50
                 },
                 {
                     x: new Date(2008, 06),
                     y: 16.75
                 },
                 {
                     x: new Date(2008, 07),
                     y: 19.30
                 },
                 {
                     x: new Date(2008, 08),
                     y: 22.80
                 },
                 {
                     x: new Date(2008, 09),
                     y: 27.50
                 },
                 {
                     x: new Date(2008, 10),
                     y: 22.75
                 },
                 {
                     x: new Date(2008, 11),
                     y: 19.30
                 },
                 {
                     x: new Date(2008, 12),
                     y: 16.80
                 },
                 {
                     x: new Date(2008, 13),
                     y: 14.50
                 }
             ]
         }]
     });
     chart.render();
 }