// JavaScript Document
var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = "palle7.jpg";
	images[1] = 'palle6.jpg';
	images[2] = 'palle5.jpg';
	images[3] = 'palle4.jpg';

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