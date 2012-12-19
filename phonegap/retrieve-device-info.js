//Global variable that will tell us whether PhoneGap is ready
var isPhoneGapReady = false;

// Default all phone types to false
var isAndroid = false;
var isBlackberry = false;
var isIphone = false;
var isWindows = false;

// Store the device's uuid
var deviceUUID;

function init() {
	//Add an event listener for deviceReady
	document.addEventListener("deviceReady",
		onDeviceReady, false);
}

function onDeviceReady() {
	// Set to true
	isPhoneGapReady = true;

	deviceUUID = device.uuid;

	// detect the device's platform
	deviceDetection();	
}

function deviceDetection () {
	if (isPhoneGapReady) {
		switch (device.platform) {
			case "Android":
				isAndroid = true;
				break;
			case "Blackberry"
				isBlackberry = true;
				break
			case "iPhone"
				isIphone = true;
				break
			case "WinCE"
				isWindows = true;
				break;
		}
		
		alert("Detected you are using a " + device.platform);
	}
}

// Set an onload handler to call the init function
window.onload = init;



