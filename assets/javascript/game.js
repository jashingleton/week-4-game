var wins = 0;
var losses = 0;

var totalScore = 0;

var randomNumber = Math.floor(Math.random() * 112 + 19);


var CrystalOne = Math.floor(Math.random() * 12 + 1);
var CrystalTwo = Math.floor(Math.random() * 12 + 1);
var CrystalThree = Math.floor(Math.random() * 12 + 1);
var CrystalFour = Math.floor(Math.random() * 12 + 1); 

var configmath = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#score').empty();
	$('#score').append(totalScore);
}

var reset = function() {
	totalScore = 0;
	randomNumber = Math.floor(Math.random() * 112 + 19);
	$("#number").empty();
	$("#number").append(randomNumber);


	 CrystalOne = Math.floor(Math.random() * 12 + 1);
	 CrystalTwo = Math.floor(Math.random() * 12 + 1);
	 CrystalThree = Math.floor(Math.random() * 12 + 1);
	 CrystalFour = Math.floor(Math.random() * 12 + 1);
	configmath();
}

var winLose = function () {
	if (totalScore == randomNumber) {
		wins++;
   	    reset();

}else if (totalScore > randomNumber) {
		losses++;
    	reset();
	}else{
		configmath();
	}}


	$("#score").append(totalScore);
	$("#number").append(randomNumber);


	$(document).ready(function() {
		reset();
		$("#image1").click(function(){
			totalScore = totalScore + CrystalOne
			winLose();
		})
		$("#image2").click(function(){
			totalScore = totalScore + CrystalTwo
			winLose();
		})
		$("#image3").click(function(){
			totalScore = totalScore + CrystalThree
			winLose();
		})
		$("#image4").click(function(){
			totalScore = totalScore + CrystalFour
			winLose();
		})
	});
	


















