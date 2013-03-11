//Global variable that will tell us whether PhoneGap is ready
var isPhoneGapReady = false;

// Store the current network status
var isConnected = false;
var isHighSpeed = false;
var internetInterval = false;

function init() {
	//Add an event listener for deviceReady
	document.addEventListener("deviceReady",
		onDeviceReady, false);
}

function onDeviceReady() {
	window.clearInterval(intervalID);
	
	// set to true
	isPhoneGapReady = true;
	
	// detect for network access
	networkDetection();
	
	// attach events for online and offline detection
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);
	
	// set a timer to check the network status
	internetInterval = window.setInterval(function() {
		if(navigator.network.connection.type != Connection.NONE) {
			onOnline();
		} else {
		  onOffline();
		}
	}, 5000);
}

function networkDetection() {
	if (isPhoneGapReady) {
		// as long as the connection type is not none,
		// the device should have itnernet access
		if (navigator.network.connection.type != Connection.NONE) {
			isConnected = true;
		}
		
		// determine whether this connection is high-speed or not
		switch (navigator.network.connection.type) {
			case Connection.UNKNOWN:
			case Connection.CELL_2G:
				isHighSpeed = false;
				break;
			default:
				isHighSpeed = true;
				break
		}
	}
}


function onOnline() {
	isConnected = true;
}

function onOffline() {
	isConnected = false;
}

// Set an onload handler to call the init function
window.onload = init;