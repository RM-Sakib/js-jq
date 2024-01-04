// show result
var number1 = 5;
var number2 = 3;

var result = number1 + number2;

function showResult(){
	document.getElementById('result').innerHTML=result;
}

// classname
function cName(){
	document.getElementsByClassName('p')[1].innerHTML="Welcome";
}

// text change
function textChange() {

	document.getElementById('t_h3').innerHTML="Hello";
}
// show date
function showDate() {

	document.getElementById('sd').innerHTML=Date();
}
// show/hide text
function showText() {
	document.getElementById('tsh').style.display="block";
}
function hideText() {
	document.getElementById('tsh').style.display="none";
}
// bulb on/off
function bulbOn() {
	document.getElementById('img').src="images/on.gif";
}
function bulbOff() {
	document.getElementById('img').src="images/off.gif";
}
// smile on/off
function smileOn() {
	document.getElementById('img_1').src="images/smile.jpg";
}
function smileOff() {
	document.getElementById('img_1').src="images/sad.jpg";
}

// show border
function showBorder() {
	document.getElementById('sb').style.border="2px solid red";
}
function bulbOff() {
	document.getElementById('img').src="images/off.gif";
}
//

$(document).ready(function(){

	// show/hide
	$('#hide').on('click', function(){
		$('#sh_h3').hide();
	});
	$('#show').on('click', function(){
		$('#sh_h3').show();
	});
	$('#togg').on('click', function(){
		$('#sh_h3').toggle(300);
	});

	// alert message
	$('#btn').on('click', function(){
		alert("welcome");
	});
})