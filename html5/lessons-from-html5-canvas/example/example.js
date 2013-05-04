var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d');

context.font = '38pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'blue';

context.filText('Hello Canvas', canvas.width/2 - 150,
									canvas.height/2 + 15);

context.strokeText('Hello Santa Monica', 	canvas.width/2 - 150,
											canvas.height/2 + 15);