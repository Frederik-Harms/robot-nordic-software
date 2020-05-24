// JavaScript Document		  
  let myChart = document.getElementById('myChart').getContext('2d'); //Når man laver en canvas som i dette tilfælde, vil man have en context, her sættes den som 2d

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Titillium Web';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = '#000000';
   
//Her laves en ny variable, med mychart etableret i. Den kaldes emballagechart da den indeholder data over emballage
    let emballageChart = new Chart(myChart, {
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
            '#7F8282', //Søjlerne har forskellige farver
            '#C3C7C8',
            '#222B3B',
            '#E9E9E9',
            '#EEEEEE',
            '#5F7F96',
            '#859598'
          ],
          borderWidth:1, //border på søjlerne
          hoverBorderWidth:3, //border når musen køres henover søjlerne
          hoverBorderColor:'#F15C22' //borderens farve på søjlerne
        }]
      },
      options:{
        title:{
          display:true, //Hele grafen der ses. Den sættes til true så indholdet ses konstant
          text:'EMBALLAGE FORBRUG OVERSIGT',
          fontSize:10
        },
        legend:{
          display:false, //Dette er en lille firkant derfor tæller hvad der er på grafen. Den sættes til false. Den ses ikke konstant, da det ikke passer godt til formen
          position:'right bottom',
          labels:{
            fontColor:'#F15C22'
			  
          }
        },
        layout:{ //Udseeende på selve grafen
          padding:{
            left:0,
            right:0,
            bottom:0,
            top:50
			
          }
        },
        tooltips:{
          enabled:false
        }
      }
    });