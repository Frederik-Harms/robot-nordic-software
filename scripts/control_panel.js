// JavaScript Document
var i = 0; // Start point
	var images = [];
	var time = 3000;
alert();
	// Image List
	images[0] = '../assets/img/palle_show/palle7.jpg';
	images[1] = '../assets/img/palle_show/palle6.jpg';
	images[2] = '../assets/img/palle_show/palle5.jpg';
	images[3] = '../assets/img/palle_show/palle4.jpg';
    images[4] = '../assets/img/palle_show/palle3.jpg';
    images[5] = '../assets/img/palle_show/palle2.jpg';
    images[6] = '../assets/img/palle_show/palle1.jpg';
    images[7] = '../assets/img/palle_show/palle0.jpg';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;

var close = document.getElementsByClassName("closebtn");
var a;

for (a = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

//prøve på alert status

function CustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();