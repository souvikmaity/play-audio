function play(){
	var audio=document.getElementById('fullname');
	if (audio.paused) {
		audio.play();
	}
	else{
		audio.currentTime=0;
	}
}
/* Plays audio file. While playing if you click again, it will restart playing from beginning*/
