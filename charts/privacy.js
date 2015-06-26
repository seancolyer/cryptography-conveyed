$(function () {
    $('#privacy-container').highcharts({
        credits: {
            enabled: false
        },
        chart: {
          type: 'line',
          zoomType: 'x',
          style: {
            fontFamily: 'Montserrat'
          },
        },
        title: {
          text: 'Privacy'
        },
        subtitle: {
            //text: 'Source: metrics.torproject.org
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%b %Y'
            },
            title: {
                text: 'Date'
            },
            plotLines: [{
                color: 'red',
                value: Date.UTC(1979, 06, 01),
                width: 2,
                label: {
                    text: 'RSA Released'
                }
            },
            {
                color: 'red',
                value: Date.UTC(1999, 08, 22),
                width: 2,
                label: {
                    text: 'RSA 512 Factored'
                }
            },
            {
                color: 'red',
                value: Date.UTC(2009, 12, 12),
                width: 2,
                label: {
                    text: 'RSA 768 Factored'
                }
            },
            {
                color: 'blue',
                value: Date.UTC(1981, 08, 01),
                width: 2,
                label: {
                    text: 'IBM PC Launch'
                }
            },
            {
                color: 'blue',
                value: Date.UTC(2007, 06, 01),
                width: 2,
                label: {
                    text: 'iPhone Launch'
                }
            }]
        },
        yAxis: {
          title: {
            text: 'Daily Users'
          },
          min: 0,
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%Y-%m-%d}: {point.y}'
        },

        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Tor users',
            data: torData
        }]
    });
});

