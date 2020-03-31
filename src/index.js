function sendMail(mail) {
  console.log("Test");
}

Highcharts.chart('container', {

  title: {
      text: undefined
  },

  chart: {
    // backgroundColor: 'transparent'
  },

  yAxis: {
      title: {
          text: 'High',
          align: 'high'
      },
      ceiling: 5
  },

  xAxis: {
      categories: ['Forces', 'Speed', 'Reliability', 'Accuracy', 'Efficiency', 'Simplicity']
  },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          }
      }
  },

  series: [{
      name: 'Linear Magnetic Actuator',
      data: [4, 4, 5, 5, 5, 5]
  }, {
      name: 'Pneumatic',
      data: [3, 4, 4, 3, 1, 2]
  }, {
      name: 'Hydraulic',
      data: [5, 5, 4, 3, 2, 2]
  }, {
      name: 'Electro Mechanical',
      data: [4, 4, 1, 5, 5, 5]
  }, {
      name: 'Tubular',
      data: [2, 3, 5, 5, 4, 5]
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

  chart: {
    styleMode: true
  }

});
