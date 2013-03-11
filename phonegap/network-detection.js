//Global variable that will tell us whether PhoneGap is ready
var isPhoneGapReady = false;

// Store the current network status
var isConnected = false;
var isHighSpeed = false;

function init() {
	//Add an event listener for deviceReady
	document.addEventListener("deviceReady",
		onDeviceReady, false);
}

function onDeviceReady() {
	// set to true
	isPhoneGapReady = true;
	
	// detect for network access
	networkDetection();
}

function networkDetection() {
	if (isPhoneGapReady) {
		// as long as the connection type is not none,
		// the device should have itnernet access
		if (navigator.network.connection.type != Connection.NONE) {
			isConnected = true;
		}
		
		// determine whether this connection is high-speed
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

// Set an onload handler to call the init function
window.onload = init;