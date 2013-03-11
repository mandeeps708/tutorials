function executeEvents() {
	if (isPhoneGapReady) {
		// attach events for online and offline detection
		document.addEventListener("online", onOnline, false);
		document.addEventListener("offline", onOffline, false);

		// attach events for pause and resume detection
		document.addEventListener("pause", onPause, false);
		document.addEventListener("resume", onResume, false);
		
		// set a timer to check the network status
		internetInterval = window.setInterval(function() {
			if (navigator.network.connection.type != Connection.NONE) {
				onOnline();
			} else {
				onOffline();
			}
		} 5000);
	}
}

function onPause() {
	isPhoneGapReady = false;

	//clear the Internet check interval
	window.clearInterval(internetInterval)
}

function onResume() {
	// don't run if phonegap is already ready
	if (isPhoneGapReady == false) {
		init(currentUrl);
	}
}