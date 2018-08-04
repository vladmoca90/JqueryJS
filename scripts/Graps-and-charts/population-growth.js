window.onload = function () {
  var chart = new CanvasJS.Chart('line-bar', {

    title: {
      fontSize: 21,
      text: 'Population growth - by decade'
    },
    data: [{
      type: 'line',

      dataPoints: [{
          x: new Date(1930, 01, 01),
          y: 1.9
        },
        {
          x: new Date(1940, 01, 01),
          y: 7.2
        },
        {
          x: new Date(1950, 01, 01),
          y: 12.9
        },
        {
          x: new Date(1960, 01, 01),
          y: 18.1
        },
        {
          x: new Date(1970, 01, 01),
          y: 23.3
        },
        {
          x: new Date(1980, 01, 01),
          y: 29.8
        },
        {
          x: new Date(1990, 01, 01),
          y: 34.4
        },
        {
          x: new Date(2000, 01, 01),
          y: 36.9
        },
        {
          x: new Date(2010, 01, 01),
          y: 39.9
        },
        {
          x: new Date(2020, 01, 01),
          y: 40.4
        },
        {
          x: new Date(2030, 01, 01),
          y: 39.9
        },
        {
          x: new Date(2040, 01, 01),
          y: 39.1
        }
      ]
    }]
  });

  chart.render();
}