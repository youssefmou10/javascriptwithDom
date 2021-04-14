var bg = document.getElementById("particles-js");

document.addEventListener("keydown",function(event){
	bg.style.backgroundColor=getRandomColor();
	var a = event.key;
	playMusic(a);
	console.log(event);
});


function playMusic(a){
	switch(a){
		case "a":
			var audio = new Audio("Kick1.wav");
			audio.play();
		break;
		case "d":
			var audio = new Audio("kick.mp3");
			audio.play();
		break;

		case "c" :
				var audio = new Audio("kick.mp3");
				audio.play();
		break;

		default :
				var audio = new Audio("Clap1.wav");
				audio.play();
				break;


		}

}


function getRandomColor(){
	var letters="0123456789ABCDEF";
	var color="#";
	for(var i=0;i<6;i++)
	{
		var color=color+letters[Math.floor(Math.random()*16)];
	}
	return color;
}