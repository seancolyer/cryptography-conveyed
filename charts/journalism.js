$(function() {
    $('#journalism-container').highcharts('Map', {
        chart : {
            borderWidth : 1
        },

        credits: {
            enabled: false
        },

        colors: ['rgba(255,20,20,0.1)', 'rgba(255,20,20,0.3)', 'rgba(255,20,20,0.6)', 'rgba(255,20,20,0.9)'],

        title : {
            text : 'Reports Without Borders Rating'
        },

        mapNavigation: {
            enabled: true
        },

        legend: {
            title: {
                text: 'Rating (lower is better)',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            },
            align: 'left',
            verticalAlign: 'bottom',
            floating: true,
            layout: 'vertical',
            valueDecimals: 0,
            symbolRadius: 0,
            symbolHeight: 14
        },

        colorAxis: {
            minColor: 'rgba(240,30,30,.1)',
            maxColor: 'rgba(240,30,30,.9)',
            dataClasses: [{
                to: 24
            }, {
                from: 24,
                to: 31
            }, {
                from: 31,
                to: 40
            }, {
                from: 40,
                to: 85
            }]
        },

        series : [{
            data : journalismData,
            mapData: Highcharts.maps['custom/world'],
            joinBy: ['iso-a2', 'code'],
            animation: true,
            name: 'Journalistic Freedom',
            states: {
                hover: {
                    color: 'rgba(15,100,50,.3)'
                }
            },
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
});
