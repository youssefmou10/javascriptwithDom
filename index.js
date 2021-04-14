var bg = document.getElementById("particles-js");

document.addEventListener("keydown",function(event){
	bg.style.backgroundColor=getRandomColor();
	/*var a = event.key;
	playMusic(a);*/
	console.log(event);
});


function getRandomColor(){
	var letters="0123456789ABCDEF";
	var color="#";
	for(var i=0;i<6;i++)
	{
		var color=color+letters[Math.floor(Math.random()*16)];
	}
	return color;
}