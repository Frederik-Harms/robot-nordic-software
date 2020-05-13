// JavaScript Document
 var myChart = document.getElementById('myChart').getContext('2d');

    // Tekstens style
    Chart.defaults.global.defaultFontFamily = 'leto';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';
 var palleChart = new Chart(myChart, {
      type:'bar', // kan også bruge: bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['PAKKE1', 'PAKKE2', 'PAKKE3', 'PAKKE4', 'PAKKE5', 'PAKKE6'],
        datasets:[{
          label:'Palle',
          data:[ //dette er bare random tal indtil videre 
			617594,
            18104,
            153060,
            106519,
            10516,
            95072
	