// JavaScript Document		  
  let myChart = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Titillium Web';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000000';

    let massPopChart = new Chart(myChart, {
      type:'bar', // fungere også som: bar, horizontalBar, pie, line, doughnut, radar, polarArea
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
          //baggrunden på søjlerne kan også hedde fx backgroundColor:'green',hvis der ønskes én enkelt farve
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
          hoverBorderColor:'#F15C22' //styling af søjlerne/dataen
        }]
      },
      options:{
        title:{
          display:true, //sættes til true, så den ses konstant
          text:'EMBALLAGE FORBRUG OVERSIGT',
          fontSize:10
        },
        legend:{
          display:false, //sættes til false, da den ikke skal ses konstant, kun når musen kommer over
          position:'right bottom',
          labels:{
            fontColor:'#F15C22'
			  
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