$(function () {
    $('#cell-container').highcharts({
        credits: {
            enabled: false
        },
        chart: {
          type: 'area',
          zoomType: 'x',
          style: {
            fontFamily: 'Montserrat'
          },
        },
        title: {
          text: null
        },
        subtitle: {
            //text: 'Source: itu.org'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%Y'
            },
            title: {
                text: 'Date'
            },
            plotLines: [{
                color: 'blue',
                value: Date.UTC(2007, 06, 01),
                width: 2,
                zIndex: 5,
                label: {
                    text: 'iPhone Launch'
                }
            }]
        },
        yAxis: [
            {
            title: {
                text: 'Event'
            },
            categories: ['Attack'],
            gridLineWidth: 0,
            min: 0
        },
        {
            title: {
                text: 'Mobile Phones'
            },
            min: 0,
            labels: {
                formatter: function() {
                    return this.value / 1000 + ' Billion';
                }
            }
        }
        ]
        ,
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%Y}: {point.name}'
        },

        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            },
            bubble: {
                colorByPoint: true
            }
        },
        series: [{
            name: 'Mobile Lines',
            data: cellData,
            enableMouseTracking: false,
            yAxis: 1
        },
        {
            name: 'Smartphones',
            data: smartPhoneData,
            enableMouseTracking: false,
            yAxis: 1
        },
        {
            type: 'bubble',
            name: 'Attacks',
            data: cellHackData,
            yAxis: 0,
            color: '#101010',
            zMin: 1,
            zMax: 100,
            maxSize: '100%',
            zIndex: 100
        }]
    });
});
