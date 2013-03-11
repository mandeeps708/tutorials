var canvas;
var context; 
var ball;

var prevX = 150;
var prevY = 150;
var offset = 0.5;

var accelTimer;

function onAccelerometerLoad() {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');

	ball = document.getElementById('ball');
	ball.onLoad = function() {
		// once the ball image has loaded, start the watch
		var options = { frequency: 100 };
		accelTimer =
			navigator.accelerometer.watchAcceleration(
				moveBall, stopBall, options);
	};
	ball.src = "images/ball.png";
}

function moveBall(acceleration) {
	var x = acceleration.x * 100;
	var y = acceleration.y * 100;

	var newX = x * offset + (1 - offset) * prevX;
	var newY = y * offset + (1 - offset) * prevY;

	// draw the ball
	drawImage(newX, newY);
}

function stopBall(error) {
	// clear the watch
	navigator.accelerometer.clearWatch(accelTimer);

	alert("Error detecting acceleration");
}

function drawImage(x, y) {
	context.clearRect(0,0, 350, 350);
	context.drawImage(ball, 0, 0, 100, 81, x, y, 100, 81);
}