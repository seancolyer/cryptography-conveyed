$(function () {
  var data = [
    {
    name: 'SSL 2.0 launch',
    color: '#111111',
    x: Date.UTC(1995, 02, 01),
    y: 0,
    z: 2
  },
  {
    name: 'SSL 3.0 launch',
    color: '#111111',
    x: Date.UTC(1996, 11, 18),
    y: 0,
    z: 2
  },
  {
    name: 'TLS 1.0 launch',
    color: '#111111',
    x: Date.UTC(1999, 01, 01),
    y: 0,
    z: 2
  },
  {
    name: 'TLS 1.1 launch',
    color: '#111111',
    x: Date.UTC(2006, 04, 01),
    y: 0,
    z: 2
  },
  {
    name: 'TLS 1.2 launch',
    color: '#111111',
    x: Date.UTC(2008, 08, 01),
    y: 0,
    z: 2
  },
  {
    name: 'TLS 1.3 Draft',
    color: '#111111',
    x: Date.UTC(2015, 05, 01),
    y: 0,
    z: 2
  },


  {
    name: 'Padding Oracle Attack',
    color: '#F01010',
    x: Date.UTC(2002, 06, 01),
    y: 1,
    z: 2
  },
  {
    name: 'CBC Weakness',
    color: '#F01010',
    x: Date.UTC(2004, 05, 20),
    y: 1,
    z: 2
  },
  {
    name: 'Renegotiation Attack',
    color: '#F01010',
    x: Date.UTC(2009, 06, 01),
    y: 1,
    z: 2
  },
  {
    name: 'BEAST',
    color: '#F01010',
    x: Date.UTC(2011, 09, 23),
    y: 1,
    z: 2
  },
  {
    name: 'RC4 Broken',
    color: '#F01010',
    x: Date.UTC(2013, 03, 01),
    y: 1,
    z: 2
  },
  {
    name: 'BREACH',
    color: '#F01010',
    x: Date.UTC(2013, 08, 01),
    y: 1,
    z: 2
  },
  {
    name: 'Heartbleed',
    color: '#F01010',
    x: Date.UTC(2014, 04, 08),
    y: 1,
    z: 2
  },
  {
    name: 'POODLE',
    color: '#F01010',
    x: Date.UTC(2014, 10, 14),
    y: 1,
    z: 2
  },
  {
    name: 'FREAK',
    color: '#F01010',
    x: Date.UTC(2015, 01, 08),
    y: 1,
    z: 2
  },

  ];

  var peopleData = [
    [Date.UTC(2015, 06, 01), 3200000000],
    [Date.UTC(2014, 12, 01), 3079000000],
    [Date.UTC(2013, 12, 01), 2712239573],
    [Date.UTC(2012, 12, 01), 2511615523],
    [Date.UTC(2011, 12, 01), 2272463038],
    [Date.UTC(2010, 12, 01), 2034259368],
    [Date.UTC(2009, 12, 01), 1752333178],
    [Date.UTC(2008, 12, 01), 1562067594],
    [Date.UTC(2007, 12, 01), 1373040542],
    [Date.UTC(2006, 12, 01), 1157500065],
    [Date.UTC(2005, 12, 01), 1029717906],
    [Date.UTC(2004, 12, 01), 910060180],
    [Date.UTC(2003, 12, 01), 778555680],
    [Date.UTC(2002, 12, 01), 662663600],
    [Date.UTC(2001, 12, 01), 500609240],
    [Date.UTC(2000, 12, 01), 413425190],
    [Date.UTC(1999, 12, 01), 280866670],
    [Date.UTC(1998, 12, 01), 188023930],
    [Date.UTC(1997, 12, 01), 120758310],
    [Date.UTC(1996, 12, 01), 77433860],
    [Date.UTC(1995, 12, 01), 44838900],
    [Date.UTC(1994, 12, 01), 25454590],
    [Date.UTC(1993, 12, 01), 14161570],
  ];
  $('#ssl-container').highcharts({
    credits: {
      enabled: false
    },
    chart: {
      style: {
        fontFamily: 'Montserrat'
      },
      zoomType: 'x'
    },
    title: {
      text: 'SSL History'
    },
    subtitle: {
      //text: 'Source: wikipedia.org, International Telecommunication Union'
    },
    xAxis: [
      {
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
        value: Date.UTC(1995, 02, 01),
        width: 2,
        zIndex: 5,
        label: {
          text: 'SSL Launch',
        }
      },
      {
        color: 'blue',
        value: Date.UTC(2007, 06, 01),
        width: 2,
        zIndex: 5,
        label: {
          text: 'iPhone Launch'
        }
      },
      {
        color: 'blue',
        value: Date.UTC(2013, 06, 01),
        width: 2,
        zIndex: 5,
        label: {
          text: 'Snowden'
        }
      }]
    }],
    yAxis: [
      {
      title: {
        text: 'SSL Event'
      },
      categories: ['launch', 'bug'],
      gridLineWidth: 0,
    },
    {
      title: {
        text: 'People on the Internet'
      },
      min: 0,
      gridLineWidth: 0,
      labels: {
        formatter: function() {
          return this.value / 1000000000 + ' Billion';
        }
      }
    }
    ],
    plotOptions: {
      bubble: {
        colorByPoint: true
      }
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%Y}: {point.name}'
    },

    series: [
      {
      type: 'area',
      name: 'People',
      data: peopleData,
      yAxis: 1,
      color: '#DCDCFF',
      enableMouseTracking: false,
      zIndex: -1
    },
    {
      type: 'bubble',
      name: 'SSL',
      data: data,
      yAxis: 0,
      color: '#101010',
      zMin: 1,
      zMax: 10,
      zIndex: 100
    }
    ]
  }
                                );
});
