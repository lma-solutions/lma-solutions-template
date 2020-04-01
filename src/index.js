import Highcharts from 'highcharts';

Highcharts.chart('container', {

  title: {
      text: undefined
  },

  chart: {
    styleMode: true,
    spacingTop: 15,
    spacingBottom: 15,
    spacingLeft: 0,
    spacingRight: 0
  },

  yAxis: {
      title: {
          text: 'High',
          align: 'high',
          style: {
            color: '#ffffff'
          }
      },
      ceiling: 5,
      labels: {
        style: {
          color: '#ffffff',
          fontSize: '1.5em'
        },
        overflow: 'none'
      },
      gridLineDashStyle: 'longdash',
      min: 0,
      max: 5
  },

  xAxis: {
      categories: ['Forces', 'Speed', 'Reliability', 'Accuracy', 'Efficiency', 'Simplicity'],
      labels: {
        style: {
          color: '#ffffff',
          fontSize: '1.5em'
        }
      }
  },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      itemStyle: {
        fontWeight: '400',
        fontSize: '1.5em',
        color: '#ffffff'
      },
      itemHoverStyle: {
        color: '#BCBEC0'
      }
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          marker: {
            symbol: 'circle',
            radius: 5
          },
          lineWidth: 3
      }
  },

  series: [{
      name: 'Linear Magnetic Actuator',
      data: [4, 4, 5, 5, 5, 5],
      lineWidth: 5,
      color: '#ffffff',
      zIndex: 1,
      marker: { radius: 10 },
      dataLabels: {
        style: {
          fontWeight: '400',
          fontSize: '1em'
        },
      },
      label: {
        style: {
          fontWeight: '400'
        }
      }
  }, {
      name: 'Pneumatic',
      data: [3, 4, 4, 3, 1, 2],
      color: '#77CC53'
  }, {
      name: 'Hydraulic',
      data: [5, 5, 4, 3, 2, 2],
      color: '#E73C3C'
  }, {
      name: 'Electro Mechanical',
      data: [4, 4, 1, 5, 5, 5],
      color: '#FDCE14'

  }, {
      name: 'Tubular',
      data: [2, 3, 5, 5, 4, 5],
      color: '#1B32FF'
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  },

  credits: {
    enabled: false
  },

  exporting: {
    enabled: false
  },

});
