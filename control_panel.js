// JavaScript Document
var i = 0; // Start point
	var images = [];
	var time = 3000;
alert();
	// Image List
	images[0] = 'img/palle_show/palle7.jpg';
	images[1] = 'img/palle_show/palle6.jpg';
	images[2] = 'img/palle_show/palle5.jpg';
	images[3] = 'img/palle_show/palle4.jpg';
    images[4] = 'img/palle_show/palle3.jpg';
    images[5] = 'img/palle_show/palle2.jpg';
    images[6] = 'img/palle_show/palle1.jpg';
    images[7] = 'img/palle_show/palle0.jpg';

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

function myFunction() {
  alert("TILPAS LAYOUT. ønsker du at foretageændringer?");
}
