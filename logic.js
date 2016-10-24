
var button = document.getElementById("complaintbutton")
var number = 0;
var complaints = ["Why would I make it easy to complain?","Clicking the button more won't let you file a complaint.", "Just stop, please, this is embarassing.", "If you want to complain this badly, why don't you just send me an email?", "There won't be any more messages after this one." ];
var number2 = 1;

button.onclick = function(){
	words.innerHTML = complaints[number];
	if(number == complaints.length){words.innerHTML = number2; number2 = number2 + 1;}
	else{number = number + 1}

};

