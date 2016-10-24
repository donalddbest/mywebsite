var text = document.getElementById("text");
var reverse = document.getElementById("reverse");
var size = document.getElementById("size");
var div =  document.getElementById("div");
var down = document.getElementById("shift-down")
var up = document.getElementById("shift-up")
var left = document.getElementById("shift-left")
var right = document.getElementById("shift-right")
var basefont = text.style.fontSize;
var number = 0;
var othernumber = 0;

reverse.onclick = function(){
	text.innerHTML = text.innerHTML.split("").reverse().join("");
	reverse.innerHTML = reverse.innerHTML.split("").reverse().join("");
	if(othernumber == 0){
		text.style.textAlign = "right";
		othernumber = 1;
	}
	else{
		text.style.textAlign = "left";
		othernumber = 0;
	}
};
size.onclick = function(){
	if(number == 0){
		text.style.fontSize="xx-small";
		number = number +1;
		size.innerHTML="Bigger?";
	}
	else if(number == 1){
		text.style.fontSize="xx-large";
		number = number +1;
		size.innerHTML = "Reset size"
	}
	else{
		number = 0;
		text.style.fontSize=basefont;
		size.innerHTML = "Smaller?";
	}
};
down.onclick = function(){
	var thing=parseInt(div.style.top);
	if(isNaN(thing)== true || thing==0){
		div.style.top="300px";
	}
	else{
		thing = thing+300;
		thing = thing.toString();
		thing = thing.concat('px');
		div.style.top=thing;
	}
};
up.onclick = function(){
	var thing=parseInt(div.style.top);
	if(isNaN(thing)== true || thing==0){
	}
	else{
		thing = thing-300;
		thing = thing.toString();
		thing = thing.concat('px');
		div.style.top=thing;
	}
}
left.onclick = function(){
	var thing=parseInt(div.style.left);
	if(isNaN(thing)== true || thing==0){
	}
	else{
		thing = thing-300;
		thing = thing.toString();
		thing = thing.concat('px');
		div.style.left=thing;
	}
}
right.onclick = function(){
	var thing=parseInt(div.style.left);
	if(isNaN(thing)== true || thing == 0){
		div.style.left="300px"
	}
	else{
		thing = thing+300;
		thing = thing.toString();
		thing = thing.concat('px');
		div.style.left=thing;
	}
}

