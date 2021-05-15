

  const labels = [
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Gabo',
      backgroundColor: 'rgb(130, 250,50 ,.8)',
      borderColor: 'rgb(250, 250,0 )',
      data: [400, 1000, 5000, 2000, 2000, 3000, 4500],
      fill:true,
    },{
        label: 'Gore',
        backgroundColor: 'rgb(250, 0, 20,.5)',
        borderColor: 'rgb(250, 0, 0)',
        data: [300, 2000, 5050, 2000, 3000, 3700, 4500],
        fill:true,
      }]
  };

  const config = {
    type: 'line',
    data,
    options: {
        plugins: {
            legend: {
              labels: {
                usePointStyle: true,
              },
             // position: 'right',
            }
          }
        }
    
  };
    // === include 'setup' then 'config' above ===

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
      );