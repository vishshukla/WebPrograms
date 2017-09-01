var numOfSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init () {
	setUpModeButtons();
	setUpSquareListeners();
	reset();

}
function setUpModeButtons() {
	for(var i = 0; i<modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset();
		});
	}
}
function setUpSquareListeners() {
	for(var i = 0; i<squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedcolor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent ="Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		}else {
			this.style.backgroundColor= "#232323";
			messageDisplay.textContent = "Try Again!"
		}
		})
	}
}



function reset() {
	colors = generateRandomColors(numOfSquares);
	//pick new random colors from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of square on array
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];

		}else {
			squares[i].style.display = "none";
		}

	}

	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", reset);




 function generateRandomColors(length){
 	//make array
 	var arr= [];
 	//add length random colors to array
 	//repeat numLine
 	for(var i = 0; i < length; i++ ) {
 		//get Random color
 		arr.push(randomColor());
 		//push to array
 	}

 	//reutrn array
 	return arr;
 }

 function randomColor() {
 	//pick red 0-255
 	var r = Math.floor(Math.random()*256);
 		//pick green 0-255
 	var g = Math.floor(Math.random()*256);
 	//pick blue 0-255
 	var b = Math.floor(Math.random()*256);

return "rgb(" +r + ", " +g + ", " +b + ")";

 }

function pickColor(length) {
	//Math.floor(Math.random() * colors.length);
	return colors[Math.floor(Math.random() * colors.length)];
}



function changeColor(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = color;
	}
	//set color to pickedColor
}
