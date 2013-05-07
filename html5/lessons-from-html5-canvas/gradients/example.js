var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	repeatRadio = document.getElementById('repeatRadio'),
	noRepeatRadio = document.getElementById('noRepeatRadio'),
	repeatXRadio = document.getElementById('repeatXRadio'),
	repeatYRadio = document.getElementById('repeatYRadio'),
	image = new Image();

// functions
function fillCanvasWithPattern (repeatString) {
	var pattern = context.createPattern(image, repeatString);
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = pattern;
	context.fillRect(0,0, canvas.width, canvas.height);
	context.fill();
}

// Event handlers
repeatRadio.onClick = function (e)	{
	fillCanvasWithPattern('repeat');
};

repeatXRadio.onClick = function (e)	{
	fillCanvasWithPattern('repeat-x');
};

repeatYRadio.onClick = function (e)	{
	fillCanvasWithPattern('repeat-y');
};

noRepeatRadio.onClick = function (e)	{
	fillCanvasWithPattern('repeat');
};

// Initialization
image.src = 'redball.png';
image.onload = function (e) {
	fillCanvasWithPattern('repeat');
}