$(function () {
  $('#cost-container').highcharts({
    chart: {
      type: 'column',
      polar: true,
      style: {
        fontFamily: 'Montserrat'
      },
    },
    title: {
      text: 'Incremental iPhone Decryption Cost'
    },
    xAxis: {
      gridLineWidth: 0,
      labels: {
        enabled: false
      }
    },
    yAxis: {
      min: 0,
      max: 100000,
      labels: {
        enabled: false
      }
    },
    plotOptions: {
      column: {
        stacking: true,
        pointWidth: (Math.PI * 2), // Full Circle
        borderWidth: 0
      }
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '${point.y}'
    },
    series: [{
      data: [100000],
      name: 'Chemical Analysis'
    }, {
      data: [1000],
      name: 'Pin Brute Forcing'
    }, {
      data: [100],
      name: 'Asking for PIN'
    }]

  });
});
