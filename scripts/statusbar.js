// JavaScript Document
var i = 0; // Start point
	var images = [];
	var time = 3000;
alert();
	// Image List
	images[0] = '../assets/img/statusline_show/status7.png';
	images[1] = '../assets/img/statusline_show/status6.png';
	images[2] = '../assets/img/statusline_show/status5.png';
	images[3] = '../assets/img/statusline_show/status4.png';
    images[4] = '../assets/img/statusline_show/status3.png';
    images[5] = '../assets/img/statusline_show/status2.png';
    images[6] = '../assets/img/statusline_show/status1.png';
    images[7] = '../assets/img/statusline_show/status0.png';

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