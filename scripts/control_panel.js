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