// JavaScript Document
var i = 0;   // Dette er slideshowet start punkt, altså den starter fra 0
	var images = [];
	var time = 3000; //dette er tiden mellem billedernes skift, sat i millisekunder (dette er 3 sek)

	// Image List sat op i array
	images[0] = '../assets/img/palle_show/palle7.jpg';
	images[1] = '../assets/img/palle_show/palle6.jpg';
	images[2] = '../assets/img/palle_show/palle5.jpg';
	images[3] = '../assets/img/palle_show/palle4.jpg';
    images[4] = '../assets/img/palle_show/palle3.jpg';
    images[5] = '../assets/img/palle_show/palle2.jpg';
    images[6] = '../assets/img/palle_show/palle1.jpg';
    images[7] = '../assets/img/palle_show/palle0.jpg';

	
	function changeImg(){                 // Change Image -en funktion der gør at billederne skifter 
		document.slide.src = images[i];   // Navnet i html, dermed kan man connecte src

		if(i < images.length - 1){        //if bestemmer at der øges med næste billede i rækken, når længden af billeder er større end i (altså 0)  
			i++;
		} else {                          //else bestemmer at når det sidste billede i rækken rammes, startes slideshow igen fra billede 0
			i = 0;
		}

		setTimeout("changeImg()", time);  //denne function gør at billeder skifter efter det bestemte antal sek, sat i toppen
	}

	window.onload = changeImg;            //dette er en event der gør at slideshowet starter forfra, når siden reloades. Bemærk at den ligger udenfor overstående function 


//Status over pakkede paller, vises som en CustomAlert, med mere tekst. 
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
		
		//Øverste, midterste og nederste del i pop op status
        document.getElementById('dialogboxhead').innerHTML = "PAKKE STATUS";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="ok" onclick="Alert.ok()">OK</button>'; //OK knappen i den nederste del af pop op
    }
	/**lukker boxen igen med ok knappen**/
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none"; 
		document.getElementById('dialogoverlay').style.display = "none"; 
	}
}
var Alert = new CustomAlert();
