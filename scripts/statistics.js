// JavaScript Document		  
  let myChart = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Titillium Web';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000000';

    let massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Folie', 'Pap', 'Plastik', 'Papir', 'Klistermærker', 'Metal'],
        datasets:[{
          label:'EMBALLAGE FORBRUG',
          data:[
            100,
            60,
            85,
            40,
            35,
            75
          ],
          //backgroundColor:'green',
          backgroundColor:[
            '#7F8282',
            '#C3C7C8',
            '#222B3B',
            '#E9E9E9',
            '#EEEEEE',
            '#5F7F96',
            '#859598'
          ],
          borderWidth:1,
         
          hoverBorderWidth:3,
          hoverBorderColor:'#F15C22'
        }]
      },
      options:{
        title:{
          display:true,
          text:'STATISTIKKER',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });