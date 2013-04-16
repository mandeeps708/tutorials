function onNotifyLoad() {
	alert("test 1");
	alert("test 2", handleClick);
	alert("test 3", handleClick, "My Title");
	alert("test 4", handleClick, "My Title", "All done");

	confirm("test 1");
	confirm("test 2", handConfirmClick);
	confirm("test 3", handleClick, "My Title");
	confirm("test 4", handleClick, "My Title", "Play Again, Quit");

	navigator.notification.vibrate(500);
	navigator.notification.beep(3);
}

function handleClick () {

}

// button contains the name of the button clicked
// Windows Phone 7 ignores names, always 'OK|Cancel'
function handleConfirmClick(button) {
	if (button == 'Play Again' || button == 'OK') {
		// do play again
	} else if (button == 'Quit' || button == 'Cancel') {
		// do quit code
	}
}

// override the built in JavaScript alert function
function alert(msg, callback, title, button) {
	navigator.notification.alert(msg, callback, title, buttons);
}

function confirm(msg, callback, title, buttons) {
	navigator.notification.confirm(msg, callback, title, buttons);
}