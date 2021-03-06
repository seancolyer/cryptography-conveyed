$(function () {
    var cpuData = [
        [Date.UTC(1971, 06, 01), 2300],
        [Date.UTC(1972, 06, 01), 3500],
        [Date.UTC(1975, 06, 01), 3510],
        [Date.UTC(1974, 06, 01), 4100],
        [Date.UTC(1974, 06, 01), 4500],
        [Date.UTC(1974, 06, 01), 5000],
        [Date.UTC(1976, 06, 01), 6500],
        [Date.UTC(1976, 06, 01), 8500],
        [Date.UTC(1978, 06, 01), 9000],
        [Date.UTC(1978, 06, 01), 29000],
        [Date.UTC(1979, 06, 01), 29000],
        [Date.UTC(1981, 06, 01), 11500],
        [Date.UTC(1982, 06, 01), 55000],
        [Date.UTC(1979, 06, 01), 68000],
        [Date.UTC(1982, 06, 01), 134000],
        [Date.UTC(1983, 06, 01), 22000],
        [Date.UTC(1984, 06, 01), 200000],
        [Date.UTC(1985, 06, 01), 275000],
        [Date.UTC(1985, 06, 01), 25000],
        [Date.UTC(1985, 06, 01), 16000],
        [Date.UTC(1986, 06, 01), 25000],
        [Date.UTC(1987, 06, 01), 553000],
        [Date.UTC(1988, 06, 01), 250000],
        [Date.UTC(1989, 06, 01), 1180235],
        [Date.UTC(1989, 06, 01), 300000],
        [Date.UTC(1991, 06, 01), 1350000],
        [Date.UTC(1991, 06, 01), 30000],
        [Date.UTC(1993, 06, 01), 3100000],
        [Date.UTC(1994, 06, 01), 578977],
        [Date.UTC(1995, 06, 01), 5500000],
        [Date.UTC(1996, 06, 01), 4300000],
        [Date.UTC(1997, 06, 01), 7500000],
        [Date.UTC(1998, 06, 01), 7500000],
        [Date.UTC(1997, 06, 01), 8800000],
        [Date.UTC(1999, 06, 01), 9500000],
        [Date.UTC(2000, 06, 01), 21000000],
        [Date.UTC(1999, 06, 01), 27400000],
        [Date.UTC(2001, 06, 01), 45000000],
        [Date.UTC(1999, 06, 01), 21300000],
        [Date.UTC(1999, 06, 01), 22000000],
        [Date.UTC(2000, 06, 01), 42000000],
        [Date.UTC(2002, 06, 01), 55000000],
        [Date.UTC(2004, 06, 01), 112000000],
        [Date.UTC(2005, 06, 01), 169000000],
        [Date.UTC(2006, 06, 01), 184000000],
        [Date.UTC(2008, 06, 01), 47000000],
        [Date.UTC(2003, 06, 01), 54300000],
        [Date.UTC(2003, 06, 01), 105900000],
        [Date.UTC(2002, 06, 01), 220000000],
        [Date.UTC(2006, 06, 01), 241000000],
        [Date.UTC(2006, 06, 01), 291000000],
        [Date.UTC(2007, 06, 01), 169000000],
        [Date.UTC(2003, 06, 01), 410000000],
        [Date.UTC(2007, 06, 01), 463000000],
        [Date.UTC(2007, 06, 01), 26000000],
        [Date.UTC(2008, 06, 01), 230000000],
        [Date.UTC(2004, 06, 01), 592000000],
        [Date.UTC(2007, 06, 01), 411000000],
        [Date.UTC(2008, 06, 01), 731000000],
        [Date.UTC(2008, 06, 01), 758000000],
        [Date.UTC(2007, 06, 01), 789000000],
        [Date.UTC(2009, 06, 01), 904000000],
        [Date.UTC(2010, 06, 01), 1000000000],
        [Date.UTC(2013, 06, 01), 1000000000],
        [Date.UTC(2011, 06, 01), 1160000000],
        [Date.UTC(2010, 06, 01), 1170000000],
        [Date.UTC(2010, 06, 01), 1200000000],
        [Date.UTC(2012, 06, 01), 1200000000],
        [Date.UTC(2012, 06, 01), 1303000000],
        [Date.UTC(2010, 06, 01), 1400000000],
        [Date.UTC(2012, 06, 01), 1400000000],
        [Date.UTC(2014, 06, 01), 1400000000],
        [Date.UTC(2006, 06, 01), 1700000000],
        [Date.UTC(2013, 06, 01), 1860000000],
        [Date.UTC(2015, 06, 01), 1900000000],
        [Date.UTC(2008, 06, 01), 1900000000],
        [Date.UTC(2010, 06, 01), 2000000000],
        [Date.UTC(2014, 06, 01), 2000000000],
        [Date.UTC(2012, 06, 01), 2100000000],
        [Date.UTC(2011, 06, 01), 2270000000],
        [Date.UTC(2010, 06, 01), 2300000000],
        [Date.UTC(2014, 06, 01), 2600000000],
        [Date.UTC(2011, 06, 01), 2600000000],
        [Date.UTC(2012, 06, 01), 2750000000],
        [Date.UTC(2014, 06, 01), 3000000000],
        [Date.UTC(2012, 06, 01), 3100000000],
        [Date.UTC(2015, 06, 01), 3990000000],
        [Date.UTC(2013, 06, 01), 4200000000],
        [Date.UTC(2014, 06, 01), 4310000000],
        [Date.UTC(2012, 06, 01), 5000000000],
        [Date.UTC(2013, 06, 01), 5000000000],
        [Date.UTC(2014, 06, 01), 5560000000],
        [Date.UTC(2015, 06, 01), 7100000000]
    ];
    var data = [
        [Date.UTC(1997, 06, 01), 3500000],
        [Date.UTC(1999, 06, 01), 8000000],
        [Date.UTC(1999, 06, 01), 15000000],
        [Date.UTC(1999, 06, 01), 23000000],
        [Date.UTC(2000, 06, 01), 20000000],
        [Date.UTC(2000, 06, 01), 25000000],
        [Date.UTC(2000, 06, 01), 30000000],
        [Date.UTC(2001, 06, 01), 57000000],
        [Date.UTC(2001, 06, 01), 60000000],
        [Date.UTC(2002, 06, 01), 63000000],
        [Date.UTC(2002, 06, 01), 107000000],
        [Date.UTC(2003, 06, 01), 117000000],
        [Date.UTC(2003, 06, 01), 135000000],
        [Date.UTC(2004, 06, 01), 160000000],
        [Date.UTC(2004, 06, 01), 222000000],
        [Date.UTC(2005, 06, 01), 303000000],
        [Date.UTC(2005, 06, 01), 321000000],
        [Date.UTC(2006, 06, 01), 384000000],
        [Date.UTC(2006, 06, 01), 681000000],
        [Date.UTC(2007, 06, 01), 700000000],
        [Date.UTC(2007, 06, 01), 754000000],
        [Date.UTC(2008, 06, 01), 959000000],
        [Date.UTC(2008, 06, 01), 1400000000],
        [Date.UTC(2009, 06, 01), 2154000000],
        [Date.UTC(2010, 06, 01), 2640000000],
        [Date.UTC(2010, 06, 01), 3200000000],
        [Date.UTC(2010, 06, 01), 3000000000],
        [Date.UTC(2012, 06, 01), 3540000000],
        [Date.UTC(2011, 06, 01), 4312711873],
        [Date.UTC(2012, 06, 01), 7080000000],
        [Date.UTC(2013, 06, 01), 6300000000],
        [Date.UTC(2014, 06, 01), 5200000000],
        [Date.UTC(2015, 06, 01), 8100000000]
    ];
    $('#cpu-container').highcharts({
        credits: {
            enabled: false
        },
        chart: {
          type: 'scatter',
          zoomType: 'x',
          style: {
            fontFamily: 'Montserrat'
          },
        },
        title: {
          text: 'Cryptography over Time'
        },
        subtitle: {
            //text: 'Source: wikipedia.org'
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
            text: 'Transistors'
          },
          min: 0,
          labels: {
            formatter: function() {
              return this.value / 1000000000 + ' Billion';
            }
          }
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%Y}: {point.y} transistors'
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
            name: 'GPUs',
            data: data
        },
        {
            name: 'CPUs',
            data: cpuData
        }]
    });
});
