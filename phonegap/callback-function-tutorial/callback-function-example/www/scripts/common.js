//Global variable that will tell us whether PhoneGap is ready
var isPhoneGapReady = false;

// Default all phone types to false
var isAndroid = false;
var isBlackberry = false;
var isIphone = false;
var isWindows = false;

// Store the device's uuid
var deviceUUID;

// Store the current network status
var isConnected = false;
var isHighSpeed = false;
var internetInterval = false;

var currentUrl;

function init(url) {
	if (typeof url != 'string') {
		currentUrl = location.href;
	} else {
		currentUrl = url;
	}
	
	if (isPhoneGapReady) {
		onDeviceReady();
	} else {
		// Add an event listener for deviceReady
		document.addEventListener("deviceReady",
			onDeviceReady, false);
	}
}

function onDeviceReady() {
	// set to true
	isPhoneGapReady = true;
	
	deviceUUID = device.uuid;
	
	// detect the device's platform
	deviceDetection();
	
	// detect for network access
	networkDetection();
	
	// execute any events at start up
	executeEvents();
	
	// execute a callback function
	executeCallback();
}

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

function deviceDetection() {
	if (isPhoneGapReady) {
		switch (device.platform) {
			case "Android":
				isAndroid = true;
				break
			case "Blackberry":
				isBlackberry = true;
				break
			case "iPhone":
				isIphone = true;
				break
			case "WinCE":
				isWindows = true;
				break
		}
	}
}

function networkDetection() {
	if (isPhoneGapReady) {
		// as long as the connection is not none.
		// the device should have Internet access
		if (navigator.network.connection.type != Connection.NONE) {
			isConnected = TRUE;
		}
		
		// determine if this connection is high speed or not
		switch (navigator.network.connection.type) {
			case Connection.UNKNOWN:
			case Connection.CELL_2G:
				isHighSpeed = false;
				break;
			default:
				isHighSpeed = true;
				break;
		}
	}
}

function onOnline() {
	isConnected = false;
}

function onOffline() {
	isConnected = false;
}

// This gets called by jQuery mobile when the page has loaded
$(document).bind("pageload", function(event, data) {
	init(data.url);
});

// Set an onload handler to call the init function
window.onload = init;



